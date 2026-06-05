import { describe, expect, it } from 'vitest';
import { AP_UNITS, QUESTIONS, getQuestionsByUnit } from './questions';

describe('AP Calculus AB question deck', () => {
  it('contains 48 original multiple-choice cards across all 8 AB units', () => {
    expect(QUESTIONS).toHaveLength(48);
    expect(AP_UNITS).toHaveLength(8);

    for (const unit of AP_UNITS) {
      expect(getQuestionsByUnit(unit.key)).toHaveLength(6);
    }
  });

  it('keeps cards playable with four choices, explanations, and valid answers', () => {
    for (const card of QUESTIONS) {
      expect(card.prompt.length).toBeGreaterThan(12);
      expect(card.choices).toHaveLength(4);
      expect(card.answerIndex).toBeGreaterThanOrEqual(0);
      expect(card.answerIndex).toBeLessThan(4);
      expect(card.explanation.length).toBeGreaterThan(15);
      expect(['easy', 'medium']).toContain(card.difficulty);
    }
  });

  it('uses a mostly easy mix with at least two medium cards per unit', () => {
    for (const unit of AP_UNITS) {
      const cards = getQuestionsByUnit(unit.key);
      expect(cards.filter((card) => card.difficulty === 'easy')).toHaveLength(4);
      expect(cards.filter((card) => card.difficulty === 'medium')).toHaveLength(2);
    }
  });
});
