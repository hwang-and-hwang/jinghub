import { style } from '@vanilla-extract/css';

export const root = style({
    height: '4.5rem',
    backgroundColor: 'rgb(22, 27, 34)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    color: 'white',
    width: 'calc(100vw - 4rem)',
    marginBottom: '2rem'
});

export const logoContainer = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '1.3rem',
    fontWeight: '400'
})

export const logo = style({
    height: '3rem',
    width: '3rem',
    borderRadius: '1.5rem'
})
