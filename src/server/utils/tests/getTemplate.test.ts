import getTemplate from '../getTemplate';
import { defaultTemplate } from '../../templates';
import { replaceWhitespace } from '../../../common/utils';

describe('getTemplate()', () => {
  const CONTENT: string = '<p>test content</p>';

  test('Renders template with content added', () => {
    const result: string = getTemplate(CONTENT);
    const expected: string = defaultTemplate.replace('{content}', CONTENT);
    expect(result).toEqual(replaceWhitespace(expected));
  });
});
