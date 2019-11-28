import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  bandView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 95,
  },

  searchBar: {
    width: '80%',
    marginTop: 10,
  },
});
