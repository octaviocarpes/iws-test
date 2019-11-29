import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { AxiosResponse } from 'axios';

import { LoadingContext } from '../../Contexts/Loading.context';
import { getAlbumById } from '../../Services/AlbumsService';
import { Album } from '../../Models/Album';

import { useStyles } from './styles';
import fallbackImage from '../../styles/img/album-icon.png';

import Image from '../../Components/Image';

const AlbumView = observer(props => {
  const loadingStore = useContext(LoadingContext);
  const [album, setAlbum] = useState<Album>();
  const styles = useStyles();

  useEffect(() => {
    if (album === undefined) {
      loadingStore.setIsLoading(true);
      getAlbumById(props.id)
        .then((response: AxiosResponse) => {
          setAlbum(response.data);
          loadingStore.setIsLoading(false);
        })
        .catch(error => {
          // TODO: notify error,
          console.log(error);
          loadingStore.setIsLoading(false);
        });
    }
    // eslint-ignore-next-line
  }, [album, loadingStore, props]);

  const calculateDuration = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      {album !== undefined ? (
        <div className={styles.albumView}>
          <div className={styles.goBack}>
            <button onClick={(): void => window.history.back()}>Go Back</button>
          </div>
          <div className={styles.albumLogo}>
            <Image src={album.image} fallbackSrc={fallbackImage} alt="album Image" />
          </div>
          <div className={styles.albumHeader}>
            <h1>{album.name}</h1>
          </div>
          <div className={styles.biography}>
            <p>Release date: {new Date(album.releasedDate).toLocaleDateString()}</p>
          </div>
          <div className={styles.tracks}>
            <h2>Tracks</h2>
            <div className={styles.tracksWrapper}>
              {album.tracks.map(track => (
                <div className={styles.track} key={track.id}>
                  <p>
                    {track.name} - Duration: {calculateDuration(track.duration)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export default AlbumView;
