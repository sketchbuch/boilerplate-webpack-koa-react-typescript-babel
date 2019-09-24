import { defaultTemplate } from '../templates';
import { replaceWhitespace } from '../../common/utils';

const getTemplate = (content: string): string => {
  return replaceWhitespace(defaultTemplate.replace('{content}', content));
};

export default getTemplate;
