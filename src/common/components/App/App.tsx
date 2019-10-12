import React, { useEffect } from 'react';
import { APP_LOADED } from '../../constants/actions';
import { Props, Store } from './App.interface';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, LoadingMessage, Para, StyledApp } from './App.styles';
import { Link, Switch, Route } from 'react-router-dom';
import { ROUTE_PAGE2, ROUTE_HOME } from '../../constants/routes';

const App: React.FC<Props> = ({ title }) => {
  const loaded: boolean = useSelector<Store, boolean>(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer: number = window.setTimeout(
      () => dispatch({ type: APP_LOADED }),
      1000
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledApp>
      <h1 data-testid="app-title">{title}</h1>
      <Para data-testid="app-description">
        Boilerplate for a webpack / koa based universal react app using babel,
        react-router, redux, and typescript
      </Para>

      {loaded === true ? (
        <LoadingMessage data-testid="app-loaded">Loaded!</LoadingMessage>
      ) : (
        <LoadingMessage data-testid="app-loading">Loading...</LoadingMessage>
      )}

      <Switch>
        <Route path={ROUTE_PAGE2}>
          <Para data-testid="app-link-page2">
            <strong>
              <Link to={ROUTE_HOME}>Back to home</Link>
            </strong>
          </Para>
        </Route>
        <Route exact path={ROUTE_HOME}>
          <Para data-testid="app-link-home">
            <strong>
              <Link to={ROUTE_PAGE2}>Go to page 2</Link>
            </strong>
          </Para>
        </Route>
        <Route>
          <ErrorMessage data-testid="app-link-404">
            <strong>404</strong>
          </ErrorMessage>
          <Para data-testid="app-description-404">
            Sorry but the page you requested could not be found
          </Para>
          <Para data-testid="app-description-404">
            <strong>
              <Link to={ROUTE_HOME}>Back to home</Link>
            </strong>
          </Para>
        </Route>
      </Switch>
    </StyledApp>
  );
};

export default App;
