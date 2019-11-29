import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { AlbumContext } from '../../Contexts/Albums.context';
import { LoadingContext } from '../../Contexts/Loading.context';
import { getAlbumsByPage } from '../../Services/AlbumsService';
import { useStyles } from './styles';

import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/SearchBar';
import AlbumCard from '../../Components/AlbumCard';

interface Props {
  location: {
    pathname: string;
  };
}

const AlbumsView = observer((props: Props) => {
  const { location } = props;
  const store = useContext(AlbumContext);
  const loadingStore = useContext(LoadingContext);
  const [searchAlbum, setSearchAlbum] = useState('');
  let currentPage = 1;
  const styles = useStyles();

  const getAlbums = (): void => {
    loadingStore.setIsLoading(true);
    getAlbumsByPage(currentPage)
      .then(response => {
        store.appendAlbums(response.data);
        loadingStore.setIsLoading(false);
      })
      .catch(error => {
        // TODO: notify user that was not possible to fetch the bands
        console.log(error);
        loadingStore.setIsLoading(false);
      });
  };

  const isBottom = (el: HTMLElement): boolean => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = (): void => {
    const wrappedElement = document.getElementById('albums-view');
    if (wrappedElement) {
      if (isBottom(wrappedElement)) {
        document.addEventListener('scroll', trackScrolling);
        currentPage++;
        getAlbums();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    // eslint-disable-next-line
    currentPage = 1;
    if (!store.albums.length) {
      getAlbums();
    }
    // eslint-disable-next-line
  }, [store, loadingStore, currentPage]);

  const renderAlbums = (): ReactElement => (
    <>
      {store.albums.map(album => (
        <li key={album.id}>
          <AlbumCard album={album} />
        </li>
      ))}
    </>
  );

  const renderSearchAlbums = (): ReactElement => (
    <>
      {store.filterAlbumsByName(searchAlbum).map(album => (
        <li key={album.id}>
          <AlbumCard album={album} />
        </li>
      ))}
    </>
  );

  const renderAlbumsList = (): ReactElement => {
    if (store.albums.length) {
      return <ul className={styles.albumsList}>{searchAlbum.length ? renderSearchAlbums() : renderAlbums()}</ul>;
    } else return <></>;
  };

  const render = (): ReactElement => (
    <>
      <AlbumContext.Provider value={store}>
        <div id="albums-view" className={styles.albumView}>
          <div className={styles.searchBar}>
            <SearchBar onChange={(text: string): void => setSearchAlbum(text)} />
          </div>
          <p>{searchAlbum}</p>
          <div className={styles.albumsWrapper}>{renderAlbumsList()}</div>
        </div>
      </AlbumContext.Provider>
      <Navbar location={location.pathname} />
    </>
  );

  return render();
});

export default AlbumsView;
