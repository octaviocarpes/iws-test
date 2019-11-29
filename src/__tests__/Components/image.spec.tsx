import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Image from '../../Components/Image';
import image from '../../styles/img/isobar-logo.png';

afterEach(cleanup);

describe('<Image />', () => {
  it('should contains the image', () => {
    const { container } = render(<Image src={image} fallbackSrc={image} alt="no image" />);
    expect(container.getElementsByTagName('img')).toHaveLength(1);
  });

  it('should render the component correctly', () => {
    const tree = render(<Image src={image} fallbackSrc={image} alt="no image" />);
    expect(tree).toMatchSnapshot();
  });
});
