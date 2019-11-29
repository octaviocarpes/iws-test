import React, { memo, ReactElement } from 'react';
import Image from '../Image';
import imageSrc from '../../styles/img/album-icon.png';
import { useStyles } from './styles';

interface Props {
  message: string;
}

const ErrorComponent = memo(
  (props: Props): ReactElement => {
    const styles = useStyles();
    return (
      <>
        <div className={styles.error}>
          <div>
            <Image src={imageSrc} fallbackSrc={imageSrc} alt="error-icon" />
          </div>
          <h1>{props.message}</h1>
        </div>
      </>
    );
  },
);

ErrorComponent.displayName = 'ErrorComponent';
export default ErrorComponent;
