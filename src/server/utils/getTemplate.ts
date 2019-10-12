import { defaultTemplate } from '../templates';
import { replaceWhitespace } from '../../common/utils';
import { StringObject } from '../../common/types';

const getTemplate = (placeholders: StringObject): string => {
  const replacedTemplate = Object.keys(placeholders).reduce(
    (replacedTemplate: string, placeholder: string) => {
      return replacedTemplate.replace(
        `{${placeholder}}`,
        placeholders[placeholder]
      );
    },
    defaultTemplate
  );

  return replaceWhitespace(replacedTemplate);
};

export default getTemplate;
