import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  searchInput: {
    border: ['1px solid lightgray'],
    borderRadius: 50,
    padding: 5,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxShadow: ['0px 3px 10px 0px rgb(224, 220, 224)'],

    '& input': {
      border: ['none'],
      borderRadius: 50,
      height: '100%',
      width: '100%',
      padding: 5,
      fontSize: 16,
      color: 'gray',
      fontFamily: 'Montserrat',

      '&:focus': {
        outline: 'none',
      },
    },

    '& img': {
      width: 30,
      height: 30,
      marginLeft: 10,
    },
  },
});
