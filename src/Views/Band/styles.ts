import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  bandView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontFamily: 'Montserrat',
  },

  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 40,
    marginTop: 15,
    marginLeft: 15,

    '& button': {
      width: '100%',
      height: '100%',
      background: 'white',
      fontSize: 16,
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      color: colors.primaryOrange,
      border: [`1px solid ${colors.primaryOrange}`],
      borderRadius: 20,

      '&:focus': {
        outline: 'none',
      },
    },
  },

  bandLogo: {
    border: ['1px solid black'],
    width: '100%',
    height: 400,

    '& img': {
      width: '100%',
      height: 400,
    },
  },

  bandHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& h1': {
      color: colors.primaryGray,
    },

    '& h3': {
      color: colors.primaryOrange,
      textTransform: 'capitalize',
    },
  },

  biography: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,

    '& p': {
      color: colors.primaryGray,
      textAlign: 'justify',
      lineHeight: 1.8,
      fontSize: 15,
    },

    '& a': {
      color: colors.primaryOrange,
    },
  },

  albums: {},
});
