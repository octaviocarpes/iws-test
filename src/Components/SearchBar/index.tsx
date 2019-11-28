import React, { ReactElement, memo } from 'react';
import { useStyles } from './styles';

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
          <input type="text" onChange={(event: React.FormEvent<HTMLInputElement>): void => _handleChange(event)} />
        </div>
      </>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
