import React, { memo, ReactElement, useState } from 'react';
import { Band } from '../../Models/Band';
import { useStyles } from './styles';
import Image from '../Image';
import fallbackImage from '../../styles/img/album-icon.png';

interface Props {
  band: Band;
  onClick?: () => void;
}

const BandCard = memo(
  (props: Props): ReactElement => {
    const { band, onClick } = props;
    const styles = useStyles();
    const [cardStyle, setCardStyle] = useState(styles.card);

    const _handleTouchStart = (): void => {
      setCardStyle(styles.clicked);
    };

    const _handleTouchEnd = (): void => {
      setCardStyle(styles.card);
      if (onClick) onClick();
    };

    return (
      <>
        <div
          className={cardStyle}
          onTouchStart={(): void => _handleTouchStart()}
          onTouchEnd={(): void => _handleTouchEnd()}
        >
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
        </div>
      </>
    );
  },
);

BandCard.displayName = 'BandCard';
export default BandCard;
