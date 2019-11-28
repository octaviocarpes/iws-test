import React from 'react';
import './App.css';
import { AppRouter } from './Router/index.jsx';
import { createUseStyles } from 'react-jss';

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

const App: React.FC = () => {
  return (
    <>
      <div className={useStyles().AppView}>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
