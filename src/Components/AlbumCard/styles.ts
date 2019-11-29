import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  albumImage: {
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '90%',
  },

  albumInfo: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'start',
  },
});
