import React, { ReactElement, useState } from 'react';

interface Props {
  src: string;
  fallbackSrc: string;
  alt: string;
}

const Image = (props: Props): ReactElement => {
  const [src, setSrc] = useState(props.src);

  const onError = (): void => {
    setSrc(props.fallbackSrc);
  };

  return (
    <>
      <img alt={props.alt} src={src} onError={(): void => onError()} />
    </>
  );
};

Image.displayName = 'Image';
export default Image;
