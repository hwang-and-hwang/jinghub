import { style } from '@vanilla-extract/css';

export const root = style({
    borderRadius: '6px',
    border: '2px solid #30363d',
    width: 'calc(90vw - 2rem)',
    padding: '1rem',
});

export const grid = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px'
})
