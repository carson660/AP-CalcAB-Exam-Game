export type UnitKey =
  | 'limits-continuity'
  | 'differentiation-basics'
  | 'differentiation-composite'
  | 'contextual-differentiation'
  | 'analytical-applications'
  | 'integration-accumulation'
  | 'differential-equations'
  | 'applications-integration';

export type Difficulty = 'easy' | 'medium';
export type BoardSpaceKind = 'start-finish' | 'question';

export interface UnitInfo {
  key: UnitKey;
  number: number;
  shortName: string;
  title: string;
  color: string;
}

export interface QuestionCard {
  id: string;
  unit: UnitKey;
  topic: string;
  difficulty: Difficulty;
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

export interface BoardSpace {
  id: string;
  index: number;
  label: string;
  kind: BoardSpaceKind;
  unit?: UnitKey;
  description: string;
}

export interface Player {
  name: string;
  position: number;
  completedLaps: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export type GameStatus = 'playing' | 'won';
export type TurnPhase = 'ready-to-roll' | 'answering' | 'won';

export interface AnswerResult {
  question: QuestionCard;
  isCorrect: boolean;
  choiceIndex: number;
  explanation: string;
  correctChoice: string;
  returnedToPrevious: boolean;
}

export interface GameState {
  player: Player;
  board: BoardSpace[];
  status: GameStatus;
  phase: TurnPhase;
  usedQuestionIds: string[];
  reshuffleCount: number;
  lastRoll?: number;
  previousPosition?: number;
  pendingPosition?: number;
  pendingCompletedLap?: boolean;
  currentSpace?: BoardSpace;
  currentQuestion?: QuestionCard;
  answerResult?: AnswerResult;
}

export type GameAction =
  | { type: 'ROLL_DICE'; value: number }
  | { type: 'ANSWER_QUESTION'; choiceIndex: number }
  | { type: 'RESET_GAME'; playerName?: string };

export interface QuestionSelection {
  question: QuestionCard;
  reshuffled: boolean;
}
