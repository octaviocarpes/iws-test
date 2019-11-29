import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { navigate } from '@reach/router';
import { BandContext } from '../../Contexts/Bands.context';
import { LoadingContext } from '../../Contexts/Loading.context';
import { getBands } from '../../Services/BandsService';
import { useStyles } from './styles';

import SearchBar from '../../Components/SearchBar';
import BandCard from '../../Components/BandCard';
import Navbar from '../../Components/Navbar';
import ErrorComponent from '../../Components/ErrorComponent';

interface Props {
  location: {
    pathname: string;
  };
}

const BandsView = observer((props: Props) => {
  const { location } = props;
  const store = useContext(BandContext);
  const loadingStore = useContext(LoadingContext);
  const [searchBand, setSearchBand] = useState('');
  const [bandsError, setBandsError] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    if (!store.bands.length) {
      loadingStore.setIsLoading(true);
      getBands()
        .then(response => {
          store.setBands(response.data);
          loadingStore.setIsLoading(false);
        })
        .catch(error => {
          setBandsError(true);
          loadingStore.setIsLoading(false);
        });
    }
  }, [store, loadingStore]);

  const renderAllBands = (): ReactElement => (
    <>
      {store.bands.map(band => (
        <li key={band.id}>
          <BandCard band={band} onTouch={(): Promise<void> => navigate(`../band/${band.id}`)} />
        </li>
      ))}
    </>
  );

  const renderSearchBands = (): ReactElement => (
    <>
      {store.filterBandsByName(searchBand).map(band => (
        <li key={band.id}>
          <BandCard band={band} onTouch={(): Promise<void> => navigate(`../band/${band.id}`)} />
        </li>
      ))}
    </>
  );

  const renderBandList = (): ReactElement => {
    if (store.bands.length) {
      return <ul className={styles.bandsList}>{searchBand.length ? renderSearchBands() : renderAllBands()}</ul>;
    } else return <> </>;
  };

  const render = (): ReactElement => (
    <>
      <BandContext.Provider value={store}>
        <>
          <div className={styles.bandView}>
            <div className={styles.searchBar}>
              <SearchBar onChange={(text: string): void => setSearchBand(text)} />
            </div>
            <div className={styles.bandsWrapper}>
              {bandsError ? <ErrorComponent message="Failed to load Bands, please try again." /> : renderBandList()}
            </div>
          </div>
        </>
      </BandContext.Provider>
      <Navbar location={location.pathname} />
    </>
  );

  return render();
});

export default BandsView;
