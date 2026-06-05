import { QUESTIONS } from '../data/questions';
import { BOARD_SPACES } from './board';
import type { BoardSpace, GameAction, GameState, QuestionCard, QuestionSelection } from './types';

export function createNewGame(playerName = 'Player'): GameState {
  return {
    player: {
      name: playerName.trim() || 'Player',
      position: 0,
      completedLaps: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    },
    board: BOARD_SPACES,
    status: 'playing',
    phase: 'ready-to-roll',
    usedQuestionIds: [],
    reshuffleCount: 0
  };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'ROLL_DICE':
      return rollDice(state, action.value);
    case 'ANSWER_QUESTION':
      return answerQuestion(state, action.choiceIndex);
    case 'RESET_GAME':
      return createNewGame(action.playerName);
    default:
      return state;
  }
}

export function getCurrentSpace(state: GameState): BoardSpace {
  return state.board[state.player.position];
}

export function selectQuestionForSpace(
  space: BoardSpace,
  usedQuestionIds: string[],
  deck: QuestionCard[] = QUESTIONS
): QuestionSelection {
  const candidates = space.unit ? deck.filter((question) => question.unit === space.unit) : deck;
  const source = candidates.length > 0 ? candidates : deck;
  const unused = source.filter((question) => !usedQuestionIds.includes(question.id));
  const available = unused.length > 0 ? unused : source;

  return {
    question: available[0],
    reshuffled: unused.length === 0
  };
}

function rollDice(state: GameState, value: number): GameState {
  if (state.status !== 'playing' || state.phase !== 'ready-to-roll') return state;

  const roll = Math.max(1, Math.min(6, Math.floor(value)));
  const previousPosition = state.player.position;
  const rawPosition = previousPosition + roll;
  const pendingPosition = rawPosition % state.board.length;
  const pendingCompletedLap = rawPosition >= state.board.length;
  const currentSpace = state.board[pendingPosition];
  const selection = selectQuestionForSpace(currentSpace, state.usedQuestionIds, QUESTIONS);
  const usedQuestionIds = state.usedQuestionIds.includes(selection.question.id)
    ? state.usedQuestionIds
    : [...state.usedQuestionIds, selection.question.id];

  return {
    ...state,
    player: {
      ...state.player,
      position: pendingPosition
    },
    phase: 'answering',
    lastRoll: roll,
    previousPosition,
    pendingPosition,
    pendingCompletedLap,
    currentSpace,
    currentQuestion: selection.question,
    answerResult: undefined,
    usedQuestionIds,
    reshuffleCount: state.reshuffleCount + (selection.reshuffled ? 1 : 0)
  };
}

function answerQuestion(state: GameState, choiceIndex: number): GameState {
  if (state.status !== 'playing' || state.phase !== 'answering' || !state.currentQuestion) {
    return state;
  }

  const isCorrect = choiceIndex === state.currentQuestion.answerIndex;

  if (!isCorrect) {
    return {
      ...state,
      player: {
        ...state.player,
        position: state.previousPosition ?? state.player.position,
        wrongAnswers: state.player.wrongAnswers + 1
      },
      phase: 'ready-to-roll',
      previousPosition: undefined,
      pendingPosition: undefined,
      pendingCompletedLap: undefined,
      currentSpace: undefined,
      currentQuestion: undefined,
      answerResult: {
        question: state.currentQuestion,
        isCorrect,
        choiceIndex,
        explanation: state.currentQuestion.explanation,
        correctChoice: state.currentQuestion.choices[state.currentQuestion.answerIndex],
        returnedToPrevious: true
      }
    };
  }

  const won = Boolean(state.pendingCompletedLap);

  return {
    ...state,
    player: {
      ...state.player,
      correctAnswers: state.player.correctAnswers + 1,
      completedLaps: state.player.completedLaps + (won ? 1 : 0)
    },
    status: won ? 'won' : 'playing',
    phase: won ? 'won' : 'ready-to-roll',
    previousPosition: undefined,
    pendingPosition: undefined,
    pendingCompletedLap: undefined,
    currentSpace: undefined,
    currentQuestion: undefined,
    answerResult: {
      question: state.currentQuestion,
      isCorrect,
      choiceIndex,
      explanation: state.currentQuestion.explanation,
      correctChoice: state.currentQuestion.choices[state.currentQuestion.answerIndex],
      returnedToPrevious: false
    }
  };
}
