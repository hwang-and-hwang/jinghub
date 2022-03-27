import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '5rem',
  width: 'auto',
});

export const button = style({
  padding: '.7rem 1rem',
  background: 'transparent',
  border: '1px solid white',
  color: 'white',
  fontSize: '1.2rem',
  borderRadius: '.7rem',
  width: '90%',
  selectors: {
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
});
