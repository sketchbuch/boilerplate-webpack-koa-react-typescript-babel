// Generic
export { StringObject } from './generic/objects.interface';

// Redux
export { ReduxActionCreator, ReduxAction } from './redux/actions.interface';
export { State } from './redux/state.interface';

// Server
export {
  KoaWebPackMiddleware,
  Placeholders,
  ServerContext,
  ServerNext,
} from './server/server.interface';

// Tests
export { RenderWithRedux, RenderWithReduxOptions } from './tests/renderWithRedux.interface';
export {
  RenderWithRouter,
  RenderWithRouterOptions,
  TestRouterProps,
} from './tests/renderWithRouter.interface';
