import React, { ReactElement, useState, memo } from 'react';

interface Props {
  src: string;
  fallbackSrc: string;
  alt: string;
}

const ImageComponent = memo(
  (props: Props): ReactElement => {
    const [error, setError] = useState(false);
    const [src, setSrc] = useState(props.src);

    const onError = (): void => {
      setError(true);
      setSrc(props.fallbackSrc);
    };

    const onLoad = (): void => {
      if (!error) {
        setSrc(props.src);
      }
    };

    return <>{<img alt={props.alt} src={src} onLoad={(): void => onLoad()} onError={(): void => onError()} />}</>;
  },
);

ImageComponent.displayName = 'Image';
export default ImageComponent;
