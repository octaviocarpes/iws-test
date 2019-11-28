import React, { ReactElement, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { AlbumContext } from '../../Contexts/Albums.context';
import { getAlbums } from '../../Services/AlbumsService';

const AlbumsView = observer(() => {
  const store = useContext(AlbumContext);

  useEffect(() => {
    getAlbums()
      .then(response => {
        store.setAlbums(response.data);
      })
      .catch(error => {
        // TODO: notify user that was not possible to fetch the bands
        console.log(error);
      });
  }, [store]);

  const render = (): ReactElement => (
    <>
      <AlbumContext.Provider value={store}>
        <h1>Albums View</h1>
        <h2>Albums</h2>
        <div>{store.albums.length ? store.albums[0].name : 'No Albums yet'}</div>
      </AlbumContext.Provider>
    </>
  );

  return render();
});

export default AlbumsView;
