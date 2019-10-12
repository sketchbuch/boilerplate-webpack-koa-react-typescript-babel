import React, { useEffect } from 'react';
import styled from 'styled-components';
import { APP_LOADED } from '../../constants/actions';
import { Props, Store } from './App.interface';
import { useSelector, useDispatch } from 'react-redux';

const StyledApp = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const StyledP = styled.div`
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
      <h1 className="App__title">{title}</h1>
      {loaded === true ? (
        <StyledP>Loaded!</StyledP>
      ) : (
        <StyledP>Loading...</StyledP>
      )}
    </StyledApp>
  );
};

export default App;
