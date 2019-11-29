import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { AppRouter } from './Router/index.jsx';
import { createUseStyles } from 'react-jss';
import { LoadingContext } from './Contexts/Loading.context';
import AppLoader from './Components/Loader';

const useStyles = createUseStyles({
  AppView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
});

const App: React.FC = observer(() => {
  const store = useContext(LoadingContext);
  return (
    <>
      <LoadingContext.Provider value={store}>
        <div className={useStyles().AppView}>
          <AppRouter />
        </div>
        <AppLoader />
      </LoadingContext.Provider>
    </>
  );
});

export default App;
