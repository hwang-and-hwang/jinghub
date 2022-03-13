import { style } from '@vanilla-extract/css';

export const root = style({
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    border: '2px solid #30363d',
    padding: '1rem',
    borderRadius: '6px'
});

export const profileImage = style({
    borderRadius: '999px',
    border: '2px solid #30363d',
    width: '50%',
});

export const list = style({
    listStyle: 'none',
    padding: '0'
});

export const listItem = style({
    display: 'flex',
    gap: '1rem',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '1rem',
});
