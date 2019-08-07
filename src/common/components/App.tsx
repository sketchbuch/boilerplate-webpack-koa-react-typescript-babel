import React from 'react';
import './App.css';

interface AppProps {
  title: string;
}

const App = ({ title = 'Sketchbuch 2' }: AppProps): JSX.Element => {
  return (
    <div className="App">
      <h1 className="App__Title">{title}</h1>
    </div>
  );
};

export default App;
