import { style } from '@vanilla-extract/css';

export const root = style({
    height: '4.5rem',
    backgroundColor: 'rgb(22, 27, 34)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
});

export const logo = style({
    height: '3rem',
    width: '3rem',
    borderRadius: '1.5rem'
})
