import React, { useEffect } from 'react';
import { APP_LOADED } from '../../constants/actions';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

export interface AppProps {
  title: string;
}

interface Store {
  app: boolean;
}

const App = ({ title }: AppProps): JSX.Element => {
  const loaded: boolean = useSelector<Store, boolean>(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(
      () => dispatch({ type: APP_LOADED }),
      1000
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1 className="App__Title">{title}</h1>
      {loaded === true ? <p>Loaded!</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
