import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { BandContext } from '../../Contexts/Bands.context';
import { getBands } from '../../Services/BandsService';
import { useStyles } from './styles';

import SearchBar from '../../Components/SearchBar';
import BandCard from '../../Components/BandCard';

const BandsView = observer(() => {
  const store = useContext(BandContext);
  const [searchBand, setSearchBand] = useState('');
  const styles = useStyles();

  useEffect(() => {
    getBands()
      .then(response => {
        store.setBands(response.data);
      })
      .catch(error => {
        // TODO: notify user that was not possible to fetch the bands
        console.log(error);
      });
  }, [store]);

  const renderAllBands = (): ReactElement => (
    <>
      {store.bands.map(band => (
        <li key={band.id}>
          <BandCard band={band} />
        </li>
      ))}
    </>
  );

  const renderSearchBands = (): ReactElement => (
    <>
      {store.filterBandsByName(searchBand).map(band => (
        <li key={band.id}>
          <BandCard band={band} />
        </li>
      ))}
    </>
  );

  const renderBandList = (): ReactElement => {
    if (store.bands.length) {
      return <ul>{searchBand.length ? renderSearchBands() : renderAllBands()}</ul>;
    } else return <p>No bands Yet</p>;
  };

  const render = (): ReactElement => (
    <>
      <BandContext.Provider value={store}>
        <>
          <div className={styles.bandView}>
            <div className={styles.searchBar}>
              <SearchBar onChange={(text: string): void => setSearchBand(text)} />
            </div>
            <p>{searchBand}</p>
            <div>{renderBandList()}</div>
          </div>
        </>
      </BandContext.Provider>
    </>
  );

  return render();
});

export default BandsView;
