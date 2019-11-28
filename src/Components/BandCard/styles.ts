import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  card: {
    border: ['1px solid lightgray'],
    boxShadow: ['0px 3px 10px 0px rgb(224, 220, 224)'],
    borderRadius: 20,
    margin: 10,
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',

    '& img': {
      height: 75,
      width: 75,
      borderRadius: 10,
    },

    '& p': {
      fontFamily: 'Montserrat',
    },
  },

  clicked: {
    border: ['1px solid lightgray'],
    borderRadius: 20,
    margin: 10,
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',

    '& img': {
      height: 75,
      width: 75,
      borderRadius: 10,
    },

    '& p': {
      fontFamily: 'Montserrat',
    },
    boxShadow: ['none'],
  },

  cardWrapper: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  bandImage: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  name: {
    fontWeight: 'bold',
    color: colors.primaryGray,
    whiteSpace: 'nowrap',
  },

  genre: {
    fontWeight: 'bold',
    fontSize: 11,
    textTransform: 'capitalize',
    color: colors.primaryOrange,
  },

  bandInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'left',
  },

  bandPlays: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },

  plays: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primaryGray,
  },
});
