import getTemplateState from '../getTemplateState';
import getTemplate from '../getTemplate';
import { defaultTemplate } from '../../templates';
import { replaceWhitespace } from '../../../common/utils';
import { store } from '../../../common/components/Root/Root';

describe('getTemplate()', () => {
  const content: string = '<p>test content</p>';

  test('Renders template with content added', () => {
    const contentState: string = getTemplateState(store.getState());
    const result: string = getTemplate({ content, contentState });
    const expected: string = defaultTemplate
      .replace('{content}', content)
      .replace('{contentState}', contentState);

    expect(result).toEqual(replaceWhitespace(expected));
  });
});
