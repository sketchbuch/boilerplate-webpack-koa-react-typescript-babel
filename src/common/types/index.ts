// Generic
export { StringObject } from './generic/objects.interface';

// Global
export { ConsoleLog } from './global/console.interface';

// Redux
export { ReduxActionCreator, ReduxAction } from './redux/actions.interface';
export { State } from './redux/state.interface';

// Server
export {
  ServerContext,
  ServerNext,
  Placeholders,
} from './server/server.interface';

// Tests
export {
  RenderWithRedux,
  RenderWithReduxOptions,
} from './tests/renderWithRedux.interface';
export {
  RenderWithRouter,
  RenderWithRouterOptions,
  TestRouterProps,
} from './tests/renderWithRouter.interface';
