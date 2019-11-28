import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  navbar: {
    position: 'fixed',
    bottom: 0,
    width: '80%',
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    border: [`2px solid ${colors.primaryOrange}`],
    boxShadow: ['0px -4px 19px -9px rgba(97,97,97,1)'],
  },

  nav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  link: {
    color: colors.primaryOrange,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '51%',
    height: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '&:first-child': {
      borderTopLeftRadius: 50,
    },
    '&:last-child': {
      borderTopRightRadius: 50,
    },
  },

  active: {
    border: [`2px solid ${colors.primaryOrange}`],
    backgroundColor: colors.primaryOrange,
    color: 'white',
  },
});
