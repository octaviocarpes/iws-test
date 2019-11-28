import React, { ReactElement, memo } from 'react';
import { useStyles } from './styles';
import searchIcon from '../../styles/img/search-icon.png';
import logo from '../../styles/img/isobar-logo.png';

interface Props {
  onChange?: (text: string) => void;
}

const SearchBar = memo(
  (props: Props): ReactElement => {
    const { onChange } = props;
    const styles = useStyles();

    const _handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
      if (onChange) onChange(event.currentTarget.value);
    };

    return (
      <>
        <div className={styles.searchInput}>
          <img alt="search-icon" src={searchIcon} />
          <input type="text" onChange={(event: React.FormEvent<HTMLInputElement>): void => _handleChange(event)} />
          <img alt="logo" src={logo} />
        </div>
      </>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
