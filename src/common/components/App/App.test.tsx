import React from 'react';
import { wait } from '@testing-library/react';
import App, { AppProps } from './App';
import renderWithRedux from '../../tests/renderWithRedux';

describe('<App />', () => {
  const props: AppProps = {
    title: 'A headline',
  };
  const LOADING_TXT: string = 'Loading...';
  const LOADED_TXT: string = 'Loaded!';

  test('Renders the title', () => {
    const { container, getByText } = renderWithRedux(<App {...props} />);
    expect(container.querySelector('.App__title')).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
  });

  test('Renders loading message', () => {
    const { container, getByText, queryByText } = renderWithRedux(
      <App {...props} />
    );
    expect(container.querySelector('#app-loading')).toBeInTheDocument();
    expect(container.querySelector('#app-loaded')).not.toBeInTheDocument();
    expect(getByText(LOADING_TXT)).toBeInTheDocument();
    expect(queryByText(LOADED_TXT)).not.toBeInTheDocument();
  });

  test('Renders loaded message after 1 second', async () => {
    const { container, getByText, queryByText } = renderWithRedux(
      <App {...props} />
    );
    await wait(
      () => {
        expect(container.querySelector('#app-loading')).not.toBeInTheDocument();
        expect(container.querySelector('#app-loaded')).toBeInTheDocument();
        expect(queryByText(LOADING_TXT)).not.toBeInTheDocument();
        expect(getByText(LOADED_TXT)).toBeInTheDocument();
      },
      {
        timeout: 1000,
      }
    );
  });
});
