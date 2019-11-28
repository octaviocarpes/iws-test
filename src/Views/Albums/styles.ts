import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  albumView: {
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

  albumsWrapper: {
    width: '100%',
  },

  albumsList: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,

    '& li': {
      width: '90%',
      marginBottom: 10,
    },
  },
});
