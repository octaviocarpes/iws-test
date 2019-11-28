import React, { ReactElement, memo, useState } from 'react';
import { useStyles } from './styles';
import { navigate } from '@reach/router';

interface Props {
  location: string;
}

const Navbar = memo(
  (props: Props): ReactElement => {
    const styles = useStyles();
    const [location, setLocation] = useState(props.location);

    const getLinkStyle = (url: string) => {
      if (location === url) return styles.active;
    };

    const getStyles = (url: string) => {
      return [getLinkStyle(url), styles.link].join(' ');
    };

    const navigateTo = (url: string): void => {
      setLocation(`${url}`);
      navigate(url);
    };

    return (
      <>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            <button className={getStyles('/bands')} onClick={(): void => navigateTo('/bands')}>
              Bands
            </button>
            <button className={getStyles('/albums')} onClick={(): void => navigateTo('/albums')}>
              Albums
            </button>
          </nav>
        </div>
      </>
    );
  },
);

Navbar.displayName = 'Navbar';

export default Navbar;
