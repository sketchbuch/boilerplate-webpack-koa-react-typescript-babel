import getTemplateState from '../getTemplateState';
import { State } from '../../../common/types/redux/state.interface';

describe('getTemplateState()', () => {
  test('Renders template with content added', () => {
    const mockState: State = { app: false };
    const result: string = getTemplateState(mockState);
    const expected: string = `
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(mockState).replace(
        /</g,
        '\\u003c'
      )}
    </script>
  `;

    expect(result).toBe(expected);
  });
});
