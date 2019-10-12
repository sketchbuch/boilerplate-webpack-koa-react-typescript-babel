import React, { useEffect } from 'react';
import styled from 'styled-components';
import { APP_LOADED } from '../../constants/actions';
import { Props, Store } from './App.interface';
import { useSelector, useDispatch } from 'react-redux';

export const StyledApp = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const StyledP = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
`;

const App = ({ title }: Props): JSX.Element => {
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
      {loaded === true ? (
        <StyledP data-testid="app-loaded">Loaded!</StyledP>
      ) : (
        <StyledP data-testid="app-loading">Loading...</StyledP>
      )}
    </StyledApp>
  );
};

export default App;
