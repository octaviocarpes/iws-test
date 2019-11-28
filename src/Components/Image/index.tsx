import React, { ReactElement, useState } from 'react';

interface Props {
  src: string;
  fallbackSrc: string;
  alt: string;
}

const ImageComponent = (props: Props): ReactElement => {
  const [error, setError] = useState(false);

  const onError = (): void => {
    setError(true);
  };

  return (
    <>
      {error ? (
        <img alt={props.alt} src={props.fallbackSrc} />
      ) : (
        <img alt={props.alt} src={props.src} onError={(): void => onError()} />
      )}
    </>
  );
};

ImageComponent.displayName = 'Image';
export default ImageComponent;
