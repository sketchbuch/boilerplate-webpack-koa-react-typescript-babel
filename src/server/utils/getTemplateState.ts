import { State } from '../../common/types/redux/state.interface';

const getTemplateState = (contentState: State): string => {
  return `
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(contentState).replace(
        /</g,
        '\\u003c'
      )}
    </script>
  `;
};

export default getTemplateState;