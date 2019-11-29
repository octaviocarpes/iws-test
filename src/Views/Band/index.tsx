import React, { useState, useEffect, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { observer } from 'mobx-react';
import { navigate } from '@reach/router';
import { getBandById, getBandAlbums } from '../../Services/BandsService';
import { LoadingContext } from '../../Contexts/Loading.context';

import Image from '../../Components/Image';

import fallbackImage from '../../styles/img/album-icon.png';
import { useStyles } from './styles';
import { Album } from '../../Models/Album';

const BandsView = observer(props => {
  const loadingStore = useContext(LoadingContext);
  const [band, setBand] = useState<any>();
  const styles = useStyles();

  // eslint-disable-next-line
  const getBandInfo = async (): Promise<any> => {
    try {
      const bandResponse = await getBandById(props.id);
      const albumsResponse = await getBandAlbums(props.id);
      const band: any = {
        ...bandResponse.data,
      };
      band.albums = albumsResponse.data;
      return band;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (band === undefined) {
      loadingStore.setIsLoading(true);
      getBandInfo()
        .then(response => {
          setBand(response);
          loadingStore.setIsLoading(false);
        })
        .catch(error => {
          // TODO: notify error,
          console.log(error);
        });
    }
  }, [band, getBandInfo, loadingStore]);

  return (
    <>
      {band !== undefined ? (
        <div className={styles.bandView}>
          <div className={styles.goBack}>
            <button onClick={(): Promise<void> => navigate('../bands')}>Go Back</button>
          </div>
          <div className={styles.bandLogo}>
            <Image src={band.image} fallbackSrc={fallbackImage} alt="Band Image" />
          </div>
          <div className={styles.bandHeader}>
            <h1>{band.name}</h1>
            <h3>{band.genre}</h3>
          </div>
          <div className={styles.biography}>
            <p>
              {band.biography.split('<')[0]}
              <span>{ReactHtmlParser(`<${band.biography.split('<')[1]}</a>`)}</span>
            </p>
          </div>
          <div className={styles.albums}>
            <div>
              {band.albums.map((album: Album) => (
                <p key={album.id}>{album.name}</p>
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

export default BandsView;
