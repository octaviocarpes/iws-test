import React, { memo, ReactElement } from 'react';
import { Band } from '../../Models/Band';
import { useStyles } from './styles';
import fallbackImage from '../../styles/img/album-icon.png';

import Image from '../Image';
import Card from '../Card';

interface Props {
  band: Band;
  onTouch?: () => void;
}

const BandCard = memo(
  (props: Props): ReactElement => {
    const { band, onTouch } = props;
    const styles = useStyles();

    const _handleTouchEnd = (): void => {
      if (onTouch) onTouch();
    };

    return (
      <>
        <Card onTouch={(): void => _handleTouchEnd()}>
          <div className={styles.cardWrapper}>
            <div className={styles.bandImage}>
              <Image alt={`${band.name}-image`} src={band.image} fallbackSrc={fallbackImage} />
            </div>
            <div className={styles.bandInfo}>
              <p className={styles.name}>{band.name}</p>
              <p className={styles.genre}>{band.genre}</p>
            </div>
          </div>

          <div className={styles.bandPlays}>
            <p className={styles.plays}>Plays: {band.numPlays}</p>
          </div>
        </Card>
      </>
    );
  },
);

BandCard.displayName = 'BandCard';
export default BandCard;
