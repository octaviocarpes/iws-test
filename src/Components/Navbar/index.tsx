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

    const getLinkStyle = (urls: string[]) => {
      if (location === urls.filter(url => url === location)[0]) return styles.active;
    };

    const getStyles = (urls: string[]) => {
      return [getLinkStyle(urls), styles.link].join(' ');
    };

    const navigateTo = (url: string): void => {
      setLocation(`${url}`);
      navigate(url);
    };

    return (
      <>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            <button className={getStyles(['/bands', '/'])} onClick={(): void => navigateTo('/bands')}>
              Bands
            </button>
            <button className={getStyles(['/albums'])} onClick={(): void => navigateTo('/albums')}>
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
