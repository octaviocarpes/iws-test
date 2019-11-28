import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  navbar: {
    position: 'fixed',
    bottom: 10,
    width: '80%',
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    border: [`2px solid ${colors.primaryOrange}`],
    boxShadow: ['0px 3px 10px 0px rgb(224, 220, 224)'],
  },

  nav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
  },

  link: {
    backgroundColor: 'white',
    color: colors.primaryOrange,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '51%',
    height: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    border: ['none'],
    '&:first-child': {
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
    },
    '&:last-child': {
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
    '&:focus': {
      outline: 'none',
    },
  },

  active: {
    border: [`2px solid ${colors.primaryOrange}`],
    backgroundColor: colors.primaryOrange,
    color: 'white',
    height: '105%',
  },
});
