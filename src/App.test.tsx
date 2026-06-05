import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('solo AP Exam Quest app shell', () => {
  it('renders a minimal one-player board game screen', () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain('AP Exam Quest');
    expect(html).toContain('Solo Mode');
    expect(html).toContain('Roll Dice');
    expect(html).toContain('Start / Finish');
    expect(html).toContain('Complete one full lap to win');
  });
});
