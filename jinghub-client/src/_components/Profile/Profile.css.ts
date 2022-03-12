import { style } from '@vanilla-extract/css';

export const root = style({
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
});

export const profileImage = style({
    borderRadius: '999px',
    border: '2px solid #30363d',
    width: '10vw',
    height: '10vw',
});

export const list = style({
    listStyle: 'none',
    padding: '0'
});

export const listItem = style({
    display: 'flex',
    gap: '1rem',
    color: 'white',
    textDecoration: 'none'
})
