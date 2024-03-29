import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
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
