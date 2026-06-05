import type { QuestionCard, UnitInfo, UnitKey } from '../game/types';

export const AP_UNITS: UnitInfo[] = [
  {
    key: 'limits-continuity',
    number: 1,
    shortName: 'Limits',
    title: 'Limits and Continuity',
    color: '#2563eb'
  },
  {
    key: 'differentiation-basics',
    number: 2,
    shortName: 'Derivative Rules',
    title: 'Differentiation: Definition and Fundamental Properties',
    color: '#0891b2'
  },
  {
    key: 'differentiation-composite',
    number: 3,
    shortName: 'Chain/Implicit',
    title: 'Differentiation: Composite, Implicit, and Inverse Functions',
    color: '#7c3aed'
  },
  {
    key: 'contextual-differentiation',
    number: 4,
    shortName: 'Rates',
    title: 'Contextual Applications of Differentiation',
    color: '#dc2626'
  },
  {
    key: 'analytical-applications',
    number: 5,
    shortName: 'Analysis',
    title: 'Analytical Applications of Differentiation',
    color: '#ea580c'
  },
  {
    key: 'integration-accumulation',
    number: 6,
    shortName: 'Integration',
    title: 'Integration and Accumulation of Change',
    color: '#16a34a'
  },
  {
    key: 'differential-equations',
    number: 7,
    shortName: 'Diff Eq',
    title: 'Differential Equations',
    color: '#0f766e'
  },
  {
    key: 'applications-integration',
    number: 8,
    shortName: 'Area/Volume',
    title: 'Applications of Integration',
    color: '#9333ea'
  }
];

export const QUESTIONS: QuestionCard[] = [
  {
    id: 'u1-e1',
    unit: 'limits-continuity',
    topic: 'Factoring limits',
    difficulty: 'easy',
    prompt: 'Evaluate lim x->3 (x^2 - 9)/(x - 3).',
    choices: ['0', '3', '6', 'Does not exist'],
    answerIndex: 2,
    explanation: 'Factor x^2 - 9 as (x - 3)(x + 3), cancel x - 3, then evaluate x + 3 at x = 3.'
  },
  {
    id: 'u1-e2',
    unit: 'limits-continuity',
    topic: 'Standard trigonometric limit',
    difficulty: 'easy',
    prompt: 'What is lim x->0 sin(x)/x?',
    choices: ['0', '1', 'infinity', 'Does not exist'],
    answerIndex: 1,
    explanation: 'The standard limit lim x->0 sin(x)/x equals 1 when x is measured in radians.'
  },
  {
    id: 'u1-e3',
    unit: 'limits-continuity',
    topic: 'Continuity test',
    difficulty: 'easy',
    prompt: 'A function is continuous at x = a when which condition is true?',
    choices: [
      'f(a) exists only',
      'lim x->a f(x) exists only',
      'lim x->a f(x) = f(a)',
      'f(a) = 0'
    ],
    answerIndex: 2,
    explanation: 'Continuity at x = a requires the function value to exist and match the two-sided limit.'
  },
  {
    id: 'u1-e4',
    unit: 'limits-continuity',
    topic: 'Removable discontinuity',
    difficulty: 'easy',
    prompt: 'For f(x) = (x^2 - 4)/(x - 2), what type of discontinuity occurs at x = 2?',
    choices: ['Jump', 'Infinite', 'Removable', 'No discontinuity'],
    answerIndex: 2,
    explanation: 'The factor x - 2 cancels, so the graph has a hole at x = 2 rather than a jump or asymptote.'
  },
  {
    id: 'u1-m1',
    unit: 'limits-continuity',
    topic: 'Intermediate Value Theorem',
    difficulty: 'medium',
    prompt: 'If f is continuous on [1, 4], f(1) = -2, and f(4) = 5, what must be true?',
    choices: [
      'f has a zero in (1, 4)',
      'f is increasing on [1, 4]',
      'f has a maximum at x = 4',
      'f is differentiable on [1, 4]'
    ],
    answerIndex: 0,
    explanation: 'By the Intermediate Value Theorem, a continuous function crossing from negative to positive has a root between those values.'
  },
  {
    id: 'u1-m2',
    unit: 'limits-continuity',
    topic: 'One-sided limits',
    difficulty: 'medium',
    prompt: 'If lim x->2- f(x) = 4 and lim x->2+ f(x) = 7, what is lim x->2 f(x)?',
    choices: ['4', '7', '11', 'Does not exist'],
    answerIndex: 3,
    explanation: 'A two-sided limit exists only when the left-hand and right-hand limits are equal.'
  },
  {
    id: 'u2-e1',
    unit: 'differentiation-basics',
    topic: 'Power rule',
    difficulty: 'easy',
    prompt: 'If f(x) = x^3, what is f\'(x)?',
    choices: ['x^2', '3x^2', '3x', 'x^4/4'],
    answerIndex: 1,
    explanation: 'The power rule gives d/dx x^n = n x^(n - 1), so d/dx x^3 = 3x^2.'
  },
  {
    id: 'u2-e2',
    unit: 'differentiation-basics',
    topic: 'Constant rule',
    difficulty: 'easy',
    prompt: 'What is the derivative of f(x) = 8?',
    choices: ['0', '1', '8', 'x'],
    answerIndex: 0,
    explanation: 'The derivative of a constant is 0 because the function has no rate of change.'
  },
  {
    id: 'u2-e3',
    unit: 'differentiation-basics',
    topic: 'Derivative as slope',
    difficulty: 'easy',
    prompt: 'If f\'(2) = -3, what is the slope of the tangent line to y = f(x) at x = 2?',
    choices: ['2', '-3', '0', 'f(2)'],
    answerIndex: 1,
    explanation: 'The derivative value at a point is the slope of the tangent line at that point.'
  },
  {
    id: 'u2-e4',
    unit: 'differentiation-basics',
    topic: 'Exponential derivative',
    difficulty: 'easy',
    prompt: 'What is d/dx e^x?',
    choices: ['x e^(x - 1)', 'e^x', 'ln x', '1/x'],
    answerIndex: 1,
    explanation: 'The natural exponential function is its own derivative.'
  },
  {
    id: 'u2-m1',
    unit: 'differentiation-basics',
    topic: 'Product rule',
    difficulty: 'medium',
    prompt: 'If h(x) = x^2 sin x, what is h\'(x)?',
    choices: ['2x cos x', '2x sin x + x^2 cos x', 'x^2 cos x', '2x sin x - x^2 cos x'],
    answerIndex: 1,
    explanation: 'Use the product rule: (x^2)\' sin x + x^2 (sin x)\' = 2x sin x + x^2 cos x.'
  },
  {
    id: 'u2-m2',
    unit: 'differentiation-basics',
    topic: 'Quotient rule',
    difficulty: 'medium',
    prompt: 'If q(x) = x/(x + 1), what is q\'(x)?',
    choices: ['1/(x + 1)', '1/(x + 1)^2', 'x/(x + 1)^2', '0'],
    answerIndex: 1,
    explanation: 'The quotient rule gives ((x + 1) - x)/(x + 1)^2 = 1/(x + 1)^2.'
  },
  {
    id: 'u3-e1',
    unit: 'differentiation-composite',
    topic: 'Chain rule',
    difficulty: 'easy',
    prompt: 'What is d/dx sin(3x)?',
    choices: ['cos(3x)', '3cos(3x)', '-3cos(3x)', 'sin(3)'],
    answerIndex: 1,
    explanation: 'Differentiate the outside function and multiply by the derivative of 3x, which is 3.'
  },
  {
    id: 'u3-e2',
    unit: 'differentiation-composite',
    topic: 'Power chain rule',
    difficulty: 'easy',
    prompt: 'What is d/dx (x^2 + 1)^5?',
    choices: ['5(x^2 + 1)^4', '10x(x^2 + 1)^4', '(x^2 + 1)^4', '5x(x^2 + 1)^4'],
    answerIndex: 1,
    explanation: 'Apply the chain rule: 5(x^2 + 1)^4 times the derivative of x^2 + 1, which is 2x.'
  },
  {
    id: 'u3-e3',
    unit: 'differentiation-composite',
    topic: 'Implicit differentiation',
    difficulty: 'easy',
    prompt: 'For x^2 + y^2 = 25, what is dy/dx?',
    choices: ['x/y', '-x/y', '-y/x', '2x + 2y'],
    answerIndex: 1,
    explanation: 'Differentiate implicitly: 2x + 2y dy/dx = 0, so dy/dx = -x/y.'
  },
  {
    id: 'u3-e4',
    unit: 'differentiation-composite',
    topic: 'Derivative of ln x',
    difficulty: 'easy',
    prompt: 'What is d/dx ln x for x > 0?',
    choices: ['ln x', '1/x', 'x', 'e^x'],
    answerIndex: 1,
    explanation: 'The derivative of ln x is 1/x on its positive domain.'
  },
  {
    id: 'u3-m1',
    unit: 'differentiation-composite',
    topic: 'Inverse function derivative',
    difficulty: 'medium',
    prompt: 'If f(2) = 5 and f\'(2) = 4, what is (f^-1)\'(5)?',
    choices: ['4', '1/4', '5/4', '2'],
    answerIndex: 1,
    explanation: 'For inverse functions, (f^-1)\'(f(a)) = 1/f\'(a), so the value is 1/4.'
  },
  {
    id: 'u3-m2',
    unit: 'differentiation-composite',
    topic: 'Logarithmic chain rule',
    difficulty: 'medium',
    prompt: 'What is d/dx ln(x^2 + 4)?',
    choices: ['1/(x^2 + 4)', '2x/(x^2 + 4)', '2x ln(x^2 + 4)', 'x/(x^2 + 4)^2'],
    answerIndex: 1,
    explanation: 'Use the chain rule for ln u: u\'/u. Here u = x^2 + 4, so u\' = 2x.'
  },
  {
    id: 'u4-e1',
    unit: 'contextual-differentiation',
    topic: 'Velocity',
    difficulty: 'easy',
    prompt: 'If position is s(t), what does s\'(t) represent?',
    choices: ['Acceleration', 'Velocity', 'Total distance', 'Initial position'],
    answerIndex: 1,
    explanation: 'Velocity is the rate of change of position with respect to time.'
  },
  {
    id: 'u4-e2',
    unit: 'contextual-differentiation',
    topic: 'Acceleration',
    difficulty: 'easy',
    prompt: 'If v(t) is velocity, what does v\'(t) represent?',
    choices: ['Position', 'Speed', 'Acceleration', 'Average value'],
    answerIndex: 2,
    explanation: 'Acceleration is the rate of change of velocity with respect to time.'
  },
  {
    id: 'u4-e3',
    unit: 'contextual-differentiation',
    topic: 'Speed',
    difficulty: 'easy',
    prompt: 'If v(t) = -6, what is the speed at time t?',
    choices: ['-6', '0', '6', 'Cannot be determined'],
    answerIndex: 2,
    explanation: 'Speed is the absolute value of velocity, so |-6| = 6.'
  },
  {
    id: 'u4-e4',
    unit: 'contextual-differentiation',
    topic: 'Units',
    difficulty: 'easy',
    prompt: 'If water volume V is in gallons and time t is in minutes, what are the units of dV/dt?',
    choices: ['minutes per gallon', 'gallons per minute', 'gallons', 'minutes'],
    answerIndex: 1,
    explanation: 'A derivative compares change in output to change in input, so the units are gallons per minute.'
  },
  {
    id: 'u4-m1',
    unit: 'contextual-differentiation',
    topic: 'Average rate of change',
    difficulty: 'medium',
    prompt: 'A particle moves from s(1) = 3 to s(5) = 19. What is its average velocity on [1, 5]?',
    choices: ['3', '4', '16', '19'],
    answerIndex: 1,
    explanation: 'Average velocity is (s(5) - s(1))/(5 - 1) = (19 - 3)/4 = 4.'
  },
  {
    id: 'u4-m2',
    unit: 'contextual-differentiation',
    topic: 'Related rates',
    difficulty: 'medium',
    prompt: 'If A = pi r^2 and dr/dt = 2, what is dA/dt when r = 3?',
    choices: ['6pi', '12pi', '18pi', '36pi'],
    answerIndex: 1,
    explanation: 'Differentiate A = pi r^2 with respect to t: dA/dt = 2pi r dr/dt = 2pi(3)(2) = 12pi.'
  },
  {
    id: 'u5-e1',
    unit: 'analytical-applications',
    topic: 'Critical points',
    difficulty: 'easy',
    prompt: 'Critical points occur where f\'(x) is zero or what else?',
    choices: ['f(x) is always positive', 'f\'(x) is undefined', 'f(x) = 0 only', 'f\'\'(x) = 1'],
    answerIndex: 1,
    explanation: 'Critical points occur where f\'(x) = 0 or where f\'(x) does not exist, provided x is in the domain of f.'
  },
  {
    id: 'u5-e2',
    unit: 'analytical-applications',
    topic: 'Increasing functions',
    difficulty: 'easy',
    prompt: 'If f\'(x) > 0 on an interval, what is f doing there?',
    choices: ['Increasing', 'Decreasing', 'Concave down', 'Constant'],
    answerIndex: 0,
    explanation: 'A positive derivative means the function increases as x increases.'
  },
  {
    id: 'u5-e3',
    unit: 'analytical-applications',
    topic: 'Concavity',
    difficulty: 'easy',
    prompt: 'If f\'\'(x) > 0 on an interval, the graph of f is usually described as what?',
    choices: ['Concave up', 'Concave down', 'Linear', 'Undefined'],
    answerIndex: 0,
    explanation: 'A positive second derivative means slopes are increasing, so the graph is concave up.'
  },
  {
    id: 'u5-e4',
    unit: 'analytical-applications',
    topic: 'Local extrema',
    difficulty: 'easy',
    prompt: 'If f\' changes from positive to negative at x = c, what occurs at c?',
    choices: ['Local minimum', 'Local maximum', 'Inflection point only', 'No conclusion possible'],
    answerIndex: 1,
    explanation: 'The function changes from increasing to decreasing, so c is a local maximum.'
  },
  {
    id: 'u5-m1',
    unit: 'analytical-applications',
    topic: 'Mean Value Theorem',
    difficulty: 'medium',
    prompt: 'The Mean Value Theorem requires f to be continuous on [a,b] and what else?',
    choices: [
      'Differentiable on (a,b)',
      'Increasing on [a,b]',
      'Positive on [a,b]',
      'Concave up on (a,b)'
    ],
    answerIndex: 0,
    explanation: 'The MVT requires continuity on the closed interval and differentiability on the open interval.'
  },
  {
    id: 'u5-m2',
    unit: 'analytical-applications',
    topic: 'Optimization',
    difficulty: 'medium',
    prompt: 'For a fixed perimeter rectangle, which shape gives the greatest area?',
    choices: ['A very long rectangle', 'A square', 'A triangle', 'Any rectangle has the same area'],
    answerIndex: 1,
    explanation: 'For a fixed rectangle perimeter, area is maximized when the side lengths are equal, making a square.'
  },
  {
    id: 'u6-e1',
    unit: 'integration-accumulation',
    topic: 'Antiderivatives',
    difficulty: 'easy',
    prompt: 'What is an antiderivative of 3x^2?',
    choices: ['x^3', '6x', 'x^2', '3x^3'],
    answerIndex: 0,
    explanation: 'The derivative of x^3 is 3x^2, so x^3 is an antiderivative.'
  },
  {
    id: 'u6-e2',
    unit: 'integration-accumulation',
    topic: 'Definite integrals',
    difficulty: 'easy',
    prompt: 'Evaluate integral from 0 to 2 of 3 dx.',
    choices: ['2', '3', '5', '6'],
    answerIndex: 3,
    explanation: 'The integral of a constant 3 over an interval of length 2 is 3 times 2, which is 6.'
  },
  {
    id: 'u6-e3',
    unit: 'integration-accumulation',
    topic: 'Fundamental Theorem of Calculus',
    difficulty: 'easy',
    prompt: 'If F(x) = integral from 1 to x of t^2 dt, what is F\'(x)?',
    choices: ['x^2', '2x', 'x^3/3', '1'],
    answerIndex: 0,
    explanation: 'By the Fundamental Theorem of Calculus, the derivative of the accumulation function is the integrand evaluated at x.'
  },
  {
    id: 'u6-e4',
    unit: 'integration-accumulation',
    topic: 'Accumulation',
    difficulty: 'easy',
    prompt: 'A rate r(t) is in meters per second. What does integral from 0 to 5 of r(t) dt represent?',
    choices: ['Average speed only', 'Total change in position', 'Acceleration', 'The value r(5)'],
    answerIndex: 1,
    explanation: 'Integrating a rate over time gives accumulated change, here total change in position.'
  },
  {
    id: 'u6-m1',
    unit: 'integration-accumulation',
    topic: 'u-substitution',
    difficulty: 'medium',
    prompt: 'What is integral 2x(x^2 + 1)^3 dx?',
    choices: ['(x^2 + 1)^4/4 + C', '2(x^2 + 1)^4 + C', '(x^2 + 1)^3 + C', 'x^2(x^2 + 1)^4 + C'],
    answerIndex: 0,
    explanation: 'Let u = x^2 + 1, so du = 2x dx. Then integral u^3 du = u^4/4 + C.'
  },
  {
    id: 'u6-m2',
    unit: 'integration-accumulation',
    topic: 'Average value',
    difficulty: 'medium',
    prompt: 'The average value of f on [a,b] is given by which expression?',
    choices: [
      'integral from a to b of f(x) dx',
      '(1/(b-a)) integral from a to b of f(x) dx',
      'f(b) - f(a)',
      'f\'(b) - f\'(a)'
    ],
    answerIndex: 1,
    explanation: 'Average value divides accumulated area by interval length: (1/(b-a)) integral_a^b f(x) dx.'
  },
  {
    id: 'u7-e1',
    unit: 'differential-equations',
    topic: 'General solutions',
    difficulty: 'easy',
    prompt: 'Solve dy/dx = 2x. Which family of functions works?',
    choices: ['y = 2x + C', 'y = x^2 + C', 'y = 2 + C', 'y = e^(2x) + C'],
    answerIndex: 1,
    explanation: 'An antiderivative of 2x is x^2, so y = x^2 + C.'
  },
  {
    id: 'u7-e2',
    unit: 'differential-equations',
    topic: 'Exponential growth',
    difficulty: 'easy',
    prompt: 'The differential equation dy/dt = ky with k > 0 models what basic behavior?',
    choices: ['Exponential growth', 'Exponential decay', 'Constant position', 'A linear decrease only'],
    answerIndex: 0,
    explanation: 'When the rate of change is proportional to y and k is positive, solutions grow exponentially.'
  },
  {
    id: 'u7-e3',
    unit: 'differential-equations',
    topic: 'Slope fields',
    difficulty: 'easy',
    prompt: 'In a slope field for dy/dx = x + y, what is the slope at the point (1, 2)?',
    choices: ['1', '2', '3', '-1'],
    answerIndex: 2,
    explanation: 'Substitute x = 1 and y = 2 into x + y to get slope 3.'
  },
  {
    id: 'u7-e4',
    unit: 'differential-equations',
    topic: 'Initial conditions',
    difficulty: 'easy',
    prompt: 'If y = x^2 + C and y(1) = 5, what is C?',
    choices: ['1', '2', '4', '5'],
    answerIndex: 2,
    explanation: 'Substitute x = 1 and y = 5: 5 = 1 + C, so C = 4.'
  },
  {
    id: 'u7-m1',
    unit: 'differential-equations',
    topic: 'Euler method',
    difficulty: 'medium',
    prompt: 'Using Euler method with step size 0.5, y(0)=1, and dy/dx=2, what is the next y-value?',
    choices: ['1', '1.5', '2', '2.5'],
    answerIndex: 2,
    explanation: 'Euler update is y_new = y_old + slope * step = 1 + 2(0.5) = 2.'
  },
  {
    id: 'u7-m2',
    unit: 'differential-equations',
    topic: 'Separation of variables',
    difficulty: 'medium',
    prompt: 'For dy/dx = xy, which separated form is correct when y is not zero?',
    choices: ['dy = x/y dx', 'dy/y = x dx', 'y dy = x dx', 'dx/y = x dy'],
    answerIndex: 1,
    explanation: 'Divide both sides by y and multiply by dx to get dy/y = x dx.'
  },
  {
    id: 'u8-e1',
    unit: 'applications-integration',
    topic: 'Area between curves',
    difficulty: 'easy',
    prompt: 'Area between y = top(x) and y = bottom(x) on [a,b] is found by which integral?',
    choices: [
      'integral_a^b bottom(x) - top(x) dx',
      'integral_a^b top(x) - bottom(x) dx',
      'integral_a^b top(x) bottom(x) dx',
      'top(b) - bottom(a)'
    ],
    answerIndex: 1,
    explanation: 'Area between curves is the integral of upper function minus lower function.'
  },
  {
    id: 'u8-e2',
    unit: 'applications-integration',
    topic: 'Disk method',
    difficulty: 'easy',
    prompt: 'Using disks, the volume formed by rotating radius r(x) around an axis is usually what?',
    choices: ['pi integral r(x)^2 dx', '2pi integral r(x) dx', 'integral r(x) dx', 'pi integral r(x) dx'],
    answerIndex: 0,
    explanation: 'A disk cross-section has area pi r^2, so volume is pi integral r(x)^2 dx.'
  },
  {
    id: 'u8-e3',
    unit: 'applications-integration',
    topic: 'Total distance',
    difficulty: 'easy',
    prompt: 'If v(t) is velocity, total distance traveled on [a,b] is found by integrating what?',
    choices: ['v(t)', '|v(t)|', 'v\'(t)', 't v(t)'],
    answerIndex: 1,
    explanation: 'Total distance accumulates speed, and speed is |v(t)|.'
  },
  {
    id: 'u8-e4',
    unit: 'applications-integration',
    topic: 'Average value in context',
    difficulty: 'easy',
    prompt: 'If f(x) gives population density, what does integral_a^b f(x) dx represent?',
    choices: ['Average density only', 'Total population over the interval', 'The maximum density', 'The derivative of density'],
    answerIndex: 1,
    explanation: 'Integrating density over an interval gives the accumulated amount, here total population.'
  },
  {
    id: 'u8-m1',
    unit: 'applications-integration',
    topic: 'Washer method',
    difficulty: 'medium',
    prompt: 'For washers with outer radius R(x) and inner radius r(x), which cross-sectional area is correct?',
    choices: ['pi(R - r)', 'pi(R^2 - r^2)', '2pi(R - r)', 'R^2 + r^2'],
    answerIndex: 1,
    explanation: 'A washer area is outer disk area minus inner disk area: pi R^2 - pi r^2.'
  },
  {
    id: 'u8-m2',
    unit: 'applications-integration',
    topic: 'Cross sections',
    difficulty: 'medium',
    prompt: 'A solid has square cross sections perpendicular to the x-axis with side length s(x). Its volume is which integral?',
    choices: ['integral s(x) dx', 'integral s(x)^2 dx', 'pi integral s(x)^2 dx', '2 integral s(x) dx'],
    answerIndex: 1,
    explanation: 'Each square cross-section has area s(x)^2, so volume is the integral of that area.'
  }
];

export function getUnitInfo(unit: UnitKey): UnitInfo {
  const info = AP_UNITS.find((candidate) => candidate.key === unit);
  if (!info) throw new Error(`Unknown AP Calculus AB unit: ${unit}`);
  return info;
}

export function getQuestionsByUnit(unit: UnitKey): QuestionCard[] {
  return QUESTIONS.filter((question) => question.unit === unit);
}
