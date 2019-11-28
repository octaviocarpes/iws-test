import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card: {
    border: ['1px solid lightgray'],
    boxShadow: ['0px 3px 10px 0px rgb(224, 220, 224)'],
    borderRadius: 20,
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
});
