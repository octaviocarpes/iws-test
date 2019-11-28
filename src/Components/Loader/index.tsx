import React, { ReactElement } from 'react';
import Loader from 'react-loader-spinner';
import { colors } from '../../styles/colors';
import { useStyles } from './styles';

interface Props {
  visible: boolean;
}

const AppLoader = (props: Props): ReactElement => {
  const styles = useStyles();

  return (
    <>
      {props.visible ? (
        <div className={styles.loaderBackground}>
          <Loader type="Bars" color={colors.primaryOrange} height={100} width={100} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

AppLoader.displayName = 'Loader';
export default AppLoader;
