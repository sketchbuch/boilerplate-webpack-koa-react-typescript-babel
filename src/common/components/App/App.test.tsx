import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { wait } from '@testing-library/react';
import App from './App';
import renderWithRedux from '../../tests/renderWithRedux';
import { Props } from './App.interface';
import { StyledApp, StyledP } from './App.styles';

describe('<App />', () => {
  const props: Props = {
    title: 'A headline',
  };
  const LOADING_TXT: string = 'Loading...';
  const LOADED_TXT: string = 'Loaded!';

  test('Renders the title', () => {
    const { getByTestId, getByText } = renderWithRedux(<App {...props} />);
    expect(getByTestId('app-title')).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
  });

  test('Renders loading message', () => {
    const {
      getByTestId,
      getByText,
      queryByTestId,
      queryByText,
    } = renderWithRedux(<App {...props} />);

    expect(getByTestId('app-loading')).toBeInTheDocument();
    expect(queryByTestId('app-loaded')).toBeNull();
    expect(getByText(LOADING_TXT)).toBeInTheDocument();
    expect(queryByText(LOADED_TXT)).not.toBeInTheDocument();
  });

  test('Renders loaded message after 1 second', async () => {
    const {
      getByTestId,
      getByText,
      queryByTestId,
      queryByText,
    } = renderWithRedux(<App {...props} />);
    await wait(
      () => {
        expect(queryByTestId('app-loading')).toBeNull();
        expect(getByTestId('app-loaded')).toBeInTheDocument();
        expect(queryByText(LOADING_TXT)).not.toBeInTheDocument();
        expect(getByText(LOADED_TXT)).toBeInTheDocument();
      },
      {
        timeout: 1000,
      }
    );
  });

  describe('Styled Components:', () => {
    test('<StyledApp />', () => {
      const tree = renderer.create(<StyledApp />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('<StyledP />', () => {
      const tree = renderer.create(<StyledP />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
