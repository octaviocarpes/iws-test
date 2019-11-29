import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SearchBar from '../../Components/SearchBar';

afterEach(cleanup);

describe('<SearchBar />', () => {
  it('should contains the SearchBar', () => {
    const { container } = render(<SearchBar />);
    expect(container.getElementsByTagName('img')).toHaveLength(2);
    expect(container.getElementsByTagName('input')).toHaveLength(1);
  });

  it('should contains the typed text', () => {
    const { container } = render(<SearchBar />);
    fireEvent.focus(container.getElementsByTagName('input')[0]);
    fireEvent.change(container.getElementsByTagName('input')[0], { target: { value: 'A' } });
    expect(container.getElementsByTagName('input')[0].value).toEqual('A');
  });

  it('should render the component correctly', () => {
    const tree = render(<SearchBar />);
    expect(tree).toMatchSnapshot();
  });
});
