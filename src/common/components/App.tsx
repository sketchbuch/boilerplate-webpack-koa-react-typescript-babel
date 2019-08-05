import React from 'react';

import '../styles/index.css';

interface AppProps {
  title: string;
}

const App = ({ title = 'Sketchbuch' }: AppProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
