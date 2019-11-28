import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { Band } from '../../Models/Band';
import { getBandById, getBandAlbums } from '../../Services/BandsService';
import { LoadingContext } from '../../Contexts/Loading.context';

import Image from '../../Components/Image';

import fallbackImage from '../../styles/img/album-icon.png';
import { useStyles } from './styles';

const BandsView = observer(props => {
  const loadingStore = useContext(LoadingContext);
  const [band, setBand] = useState<Band>();
  const styles = useStyles();

  const getBandInfo = async (): Promise<Band> => {
    try {
      const bandResponse = await getBandById(props.id);
      const albumsResponse = await getBandAlbums(props.id);
      const band: Band = {
        ...bandResponse.data,
      };
      band.albums = albumsResponse.data;
      console.log(band);
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
  }, [band]);

  return (
    <>
      {band !== undefined ? (
        <div className={styles.bandView}>
          <Image src={band.image} fallbackSrc={fallbackImage} alt="Band Image" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export default BandsView;
