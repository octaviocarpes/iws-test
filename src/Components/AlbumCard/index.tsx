import React, { memo, ReactElement } from 'react';
import { Album } from '../../Models/Album';
import { useStyles } from './styles';
import fallbackImage from '../../styles/img/album-icon.png';

import Image from '../Image';
import Card from '../Card';

interface Props {
  album: Album;
  onTouch?: () => void;
}

const AlbumCard = memo(
  (props: Props): ReactElement => {
    const { album, onTouch } = props;
    const styles = useStyles();

    const _handleTouchEnd = (): void => {
      if (onTouch) onTouch();
    };

    return (
      <>
        <Card onTouch={(): void => _handleTouchEnd()}>
          <div className={styles.cardWrapper}>
            <div className={styles.albumImage}>
              <Image alt={`${album.name}-image`} src={album.image} fallbackSrc={fallbackImage} />
            </div>
            <div className={styles.albumInfo}>
              <p className={styles.name}>{album.name}</p>
            </div>
          </div>
        </Card>
      </>
    );
  },
);

AlbumCard.displayName = 'AlbumCard';
export default AlbumCard;
