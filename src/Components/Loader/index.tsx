import React, { ReactElement, useContext } from 'react';
import Loader from 'react-loader-spinner';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { colors } from '../../styles/colors';
import { useStyles } from './styles';
import { LoadingContext } from '../../Contexts/Loading.context';

const AppLoader = observer(
  (): ReactElement => {
    const store = observable(useContext(LoadingContext));
    const styles = useStyles();

    return (
      <>
        {store.isLoading ? (
          <div className={styles.loaderBackground}>
            <Loader type="Bars" color={colors.primaryOrange} height={100} width={100} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  },
);

export default AppLoader;
