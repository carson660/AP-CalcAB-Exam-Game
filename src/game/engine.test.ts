import { describe, expect, it } from 'vitest';
import { BOARD_SPACES } from './board';
import { createNewGame, gameReducer, getCurrentSpace, selectQuestionForSpace } from './engine';
import { QUESTIONS } from '../data/questions';

describe('solo AP Exam Quest engine', () => {
  it('creates a one-player game on a 16-space square loop with start and finish on the same space', () => {
    const state = createNewGame('Player');

    expect(state.player.name).toBe('Player');
    expect(state.player.position).toBe(0);
    expect(state.player.completedLaps).toBe(0);
    expect(state.status).toBe('playing');
    expect(state.phase).toBe('ready-to-roll');
    expect(BOARD_SPACES).toHaveLength(16);
    expect(BOARD_SPACES[0].kind).toBe('start-finish');
  });

  it('rolls 1 to 6 spaces, opens a question, and keeps the previous position pending', () => {
    const initial = createNewGame('Player');
    const rolled = gameReducer(initial, { type: 'ROLL_DICE', value: 4 });

    expect(rolled.lastRoll).toBe(4);
    expect(rolled.previousPosition).toBe(0);
    expect(rolled.pendingPosition).toBe(4);
    expect(rolled.player.position).toBe(4);
    expect(rolled.phase).toBe('answering');
    expect(rolled.currentQuestion?.unit).toBe(BOARD_SPACES[4].unit);
  });

  it('keeps the player on the landed space after a correct answer', () => {
    const rolled = gameReducer(createNewGame('Player'), { type: 'ROLL_DICE', value: 2 });
    const answered = gameReducer(rolled, {
      type: 'ANSWER_QUESTION',
      choiceIndex: rolled.currentQuestion?.answerIndex ?? -1
    });

    expect(answered.player.position).toBe(2);
    expect(answered.player.correctAnswers).toBe(1);
    expect(answered.player.wrongAnswers).toBe(0);
    expect(answered.previousPosition).toBeUndefined();
    expect(answered.pendingPosition).toBeUndefined();
    expect(answered.phase).toBe('ready-to-roll');
  });

  it('returns the player to the previous position after a wrong answer', () => {
    const rolled = gameReducer(createNewGame('Player'), { type: 'ROLL_DICE', value: 5 });
    const wrongChoice = ((rolled.currentQuestion?.answerIndex ?? 0) + 1) % 4;
    const answered = gameReducer(rolled, { type: 'ANSWER_QUESTION', choiceIndex: wrongChoice });

    expect(answered.player.position).toBe(0);
    expect(answered.player.correctAnswers).toBe(0);
    expect(answered.player.wrongAnswers).toBe(1);
    expect(answered.phase).toBe('ready-to-roll');
  });

  it('wins only after completing a full loop and answering the landing question correctly', () => {
    const nearFinish = {
      ...createNewGame('Player'),
      player: { ...createNewGame('Player').player, position: 14 }
    };
    const rolled = gameReducer(nearFinish, { type: 'ROLL_DICE', value: 3 });

    expect(rolled.pendingCompletedLap).toBe(true);
    expect(rolled.player.position).toBe(1);
    expect(rolled.status).toBe('playing');

    const answered = gameReducer(rolled, {
      type: 'ANSWER_QUESTION',
      choiceIndex: rolled.currentQuestion?.answerIndex ?? -1
    });

    expect(answered.status).toBe('won');
    expect(answered.phase).toBe('won');
    expect(answered.player.completedLaps).toBe(1);
    expect(answered.player.position).toBe(1);
  });

  it('does not win if a loop-completing move is answered incorrectly', () => {
    const initial = createNewGame('Player');
    const nearFinish = {
      ...initial,
      player: { ...initial.player, position: 15 }
    };
    const rolled = gameReducer(nearFinish, { type: 'ROLL_DICE', value: 1 });
    const wrongChoice = ((rolled.currentQuestion?.answerIndex ?? 0) + 1) % 4;
    const answered = gameReducer(rolled, { type: 'ANSWER_QUESTION', choiceIndex: wrongChoice });

    expect(answered.status).toBe('playing');
    expect(answered.phase).toBe('ready-to-roll');
    expect(answered.player.position).toBe(15);
    expect(answered.player.completedLaps).toBe(0);
  });

  it('selects a question from the landed space unit and reshuffles when that unit is exhausted', () => {
    const space = getCurrentSpace({ ...createNewGame('Player'), player: { ...createNewGame('Player').player, position: 3 } });
    const usedIds = QUESTIONS.filter((question) => question.unit === space.unit).map((question) => question.id);
    const selection = selectQuestionForSpace(space, usedIds, QUESTIONS);

    expect(selection.question.unit).toBe(space.unit);
    expect(selection.reshuffled).toBe(true);
  });
});
