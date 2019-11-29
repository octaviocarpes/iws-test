import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  error: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& h2': {
      width: '80%',
      textAlign: 'center',
      fontFamily: 'Montserrat',
      color: colors.primaryOrange,
    },
  },

  image: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: '80%',
    },
  },
});
