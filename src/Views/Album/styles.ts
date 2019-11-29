import { createUseStyles } from 'react-jss';
import { colors } from '../../styles/colors';

export const useStyles = createUseStyles({
  albumView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontFamily: 'Montserrat',
  },

  goBack: {
    position: 'fixed',
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

  albumLogo: {
    border: ['1px solid black'],
    width: '100%',
    height: 400,

    '& img': {
      width: '100%',
      height: 400,
    },
  },

  albumHeader: {
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

  tracks: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& h2': {
      color: colors.primaryOrange,
    },
  },

  tracksWrapper: {
    width: '90%',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
  },

  track: {
    marginBottom: 15,
  },
});
