import React, { ReactElement, memo } from 'react';
import { Link } from '@reach/router';
import { useStyles } from './styles';

interface Props {
  location: string;
}

const Navbar = memo(
  (props: Props): ReactElement => {
    const styles = useStyles();

    const getLinkStyle = (url: string) => {
      if (props.location === url) return styles.active;
    };

    return (
      <>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            <Link className={[getLinkStyle('/app/bands'), styles.link].join(' ')} to="app/bands">
              Bands
            </Link>
            <Link className={[getLinkStyle('/app/albums'), styles.link].join(' ')} to="app/albums">
              Albums
            </Link>
          </nav>
        </div>
      </>
    );
  },
);

Navbar.displayName = 'Navbar';

export default Navbar;
