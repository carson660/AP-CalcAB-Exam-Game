import type { BoardSpace } from './types';

export const BOARD_SPACES: BoardSpace[] = [
  {
    id: 'start-finish',
    index: 0,
    label: 'Start / Finish',
    kind: 'start-finish',
    description: 'Complete one full lap to win.'
  },
  {
    id: 'limits-1',
    index: 1,
    label: 'Limits',
    kind: 'question',
    unit: 'limits-continuity',
    description: 'Limits and continuity.'
  },
  {
    id: 'derivatives-1',
    index: 2,
    label: 'Derivatives',
    kind: 'question',
    unit: 'differentiation-basics',
    description: 'Basic derivative rules.'
  },
  {
    id: 'chain-1',
    index: 3,
    label: 'Chain Rule',
    kind: 'question',
    unit: 'differentiation-composite',
    description: 'Composite and implicit derivatives.'
  },
  {
    id: 'rates-1',
    index: 4,
    label: 'Rates',
    kind: 'question',
    unit: 'contextual-differentiation',
    description: 'Velocity, units, and related rates.'
  },
  {
    id: 'analysis-1',
    index: 5,
    label: 'Analysis',
    kind: 'question',
    unit: 'analytical-applications',
    description: 'Extrema, concavity, and MVT.'
  },
  {
    id: 'integrals-1',
    index: 6,
    label: 'Integrals',
    kind: 'question',
    unit: 'integration-accumulation',
    description: 'Accumulation and FTC.'
  },
  {
    id: 'diff-eq-1',
    index: 7,
    label: 'Diff Eq',
    kind: 'question',
    unit: 'differential-equations',
    description: 'Slope fields and solutions.'
  },
  {
    id: 'area-volume-1',
    index: 8,
    label: 'Area/Volume',
    kind: 'question',
    unit: 'applications-integration',
    description: 'Applications of integration.'
  },
  {
    id: 'limits-2',
    index: 9,
    label: 'Limits',
    kind: 'question',
    unit: 'limits-continuity',
    description: 'Limits and continuity.'
  },
  {
    id: 'derivatives-2',
    index: 10,
    label: 'Derivatives',
    kind: 'question',
    unit: 'differentiation-basics',
    description: 'Basic derivative rules.'
  },
  {
    id: 'chain-2',
    index: 11,
    label: 'Chain Rule',
    kind: 'question',
    unit: 'differentiation-composite',
    description: 'Composite and implicit derivatives.'
  },
  {
    id: 'rates-2',
    index: 12,
    label: 'Rates',
    kind: 'question',
    unit: 'contextual-differentiation',
    description: 'Velocity, units, and related rates.'
  },
  {
    id: 'analysis-2',
    index: 13,
    label: 'Analysis',
    kind: 'question',
    unit: 'analytical-applications',
    description: 'Extrema, concavity, and MVT.'
  },
  {
    id: 'integrals-2',
    index: 14,
    label: 'Integrals',
    kind: 'question',
    unit: 'integration-accumulation',
    description: 'Accumulation and FTC.'
  },
  {
    id: 'diff-eq-2',
    index: 15,
    label: 'Diff Eq',
    kind: 'question',
    unit: 'differential-equations',
    description: 'Slope fields and solutions.'
  }
];
