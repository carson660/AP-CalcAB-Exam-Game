import { Dice5, RotateCcw, Trophy } from 'lucide-react';
import { useReducer } from 'react';
import { getUnitInfo } from './data/questions';
import { createNewGame, gameReducer, getCurrentSpace } from './game/engine';
import type { BoardSpace, GameAction, GameState, QuestionCard } from './game/types';

const squarePositions = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [5, 5],
  [5, 4],
  [5, 3],
  [5, 2],
  [5, 1],
  [4, 1],
  [3, 1],
  [2, 1]
];

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () => createNewGame('Player'));
  const currentSpace = getCurrentSpace(state);

  return (
    <main className="solo-app">
      <header className="solo-header">
        <div>
          <p className="eyebrow">Solo Mode</p>
          <h1>AP Exam Quest</h1>
        </div>
        <button className="plain-button" type="button" onClick={() => dispatch({ type: 'RESET_GAME' })}>
          <RotateCcw size={18} aria-hidden="true" />
          Reset
        </button>
      </header>

      <section className="solo-layout">
        <SquareBoard state={state} />
        <ControlPanel state={state} currentSpace={currentSpace} dispatch={dispatch} />
      </section>
    </main>
  );
}

interface SquareBoardProps {
  state: GameState;
}

function SquareBoard({ state }: SquareBoardProps) {
  return (
    <div className="square-board" aria-label="Monopoly style square AP Calculus board">
      <div className="board-center">
        <strong>Complete one full lap to win</strong>
        <span>Start and finish are the same space.</span>
      </div>
      {state.board.map((space) => (
        <BoardTile
          key={space.id}
          space={space}
          active={space.index === state.player.position}
        />
      ))}
    </div>
  );
}

interface BoardTileProps {
  space: BoardSpace;
  active: boolean;
}

function BoardTile({ space, active }: BoardTileProps) {
  const [row, column] = squarePositions[space.index];
  const unit = space.unit ? getUnitInfo(space.unit) : undefined;

  return (
    <div
      className={`board-tile ${space.kind} ${active ? 'active' : ''}`}
      style={
        {
          gridRow: row,
          gridColumn: column,
          '--unit-color': unit?.color ?? '#111827'
        } as React.CSSProperties
      }
    >
      <span className="tile-index">{space.index}</span>
      <strong>{space.label}</strong>
      <small>{space.kind === 'start-finish' ? 'Start / Finish' : unit?.shortName}</small>
      {active ? <span className="pawn">P</span> : null}
    </div>
  );
}

interface ControlPanelProps {
  state: GameState;
  currentSpace: BoardSpace;
  dispatch: React.Dispatch<GameAction>;
}

function ControlPanel({ state, currentSpace, dispatch }: ControlPanelProps) {
  return (
    <aside className="control-panel">
      <div className="status-box">
        <p className="eyebrow">Current Space</p>
        <h2>{currentSpace.label}</h2>
        <p>{currentSpace.description}</p>
      </div>

      <div className="stats-row">
        <div>
          <span>Position</span>
          <strong>{state.player.position}</strong>
        </div>
        <div>
          <span>Last Roll</span>
          <strong>{state.lastRoll ?? '-'}</strong>
        </div>
        <div>
          <span>Correct</span>
          <strong>{state.player.correctAnswers}</strong>
        </div>
        <div>
          <span>Wrong</span>
          <strong>{state.player.wrongAnswers}</strong>
        </div>
      </div>

      {state.status === 'won' ? (
        <div className="win-box">
          <Trophy size={32} aria-hidden="true" />
          <h2>You win!</h2>
          <p>You completed one full lap and answered the final landing question correctly.</p>
        </div>
      ) : null}

      {state.phase === 'ready-to-roll' ? (
        <button
          className="roll-button"
          type="button"
          onClick={() => dispatch({ type: 'ROLL_DICE', value: Math.floor(Math.random() * 6) + 1 })}
        >
          <Dice5 size={22} aria-hidden="true" />
          Roll Dice
        </button>
      ) : null}

      {state.phase === 'answering' && state.currentQuestion ? (
        <QuestionBox question={state.currentQuestion} dispatch={dispatch} />
      ) : null}

      {state.answerResult ? (
        <div className={`answer-result ${state.answerResult.isCorrect ? 'correct' : 'wrong'}`}>
          <strong>{state.answerResult.isCorrect ? 'Correct: stay here.' : 'Wrong: return to your previous space.'}</strong>
          <p>
            Correct answer: <b>{state.answerResult.correctChoice}</b>
          </p>
          <p>{state.answerResult.explanation}</p>
        </div>
      ) : null}

      <div className="rules-note">
        <strong>Rules</strong>
        <p>Roll 1-6 spaces. Answer the landing question. Correct means you stay. Wrong means you go back. Complete one lap to win.</p>
      </div>
    </aside>
  );
}

interface QuestionBoxProps {
  question: QuestionCard;
  dispatch: React.Dispatch<GameAction>;
}

function QuestionBox({ question, dispatch }: QuestionBoxProps) {
  const unit = getUnitInfo(question.unit);

  return (
    <div className="question-box">
      <p className="eyebrow">Question · Unit {unit.number}</p>
      <h2>{question.prompt}</h2>
      <div className="choice-grid">
        {question.choices.map((choice, index) => (
          <button
            className="choice"
            key={choice}
            type="button"
            onClick={() => dispatch({ type: 'ANSWER_QUESTION', choiceIndex: index })}
          >
            <span>{String.fromCharCode(65 + index)}</span>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
