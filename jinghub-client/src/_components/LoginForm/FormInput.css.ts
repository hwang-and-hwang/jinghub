import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gap: '2rem',
  height: 'auto',
});

export const input = style({
  padding: '.5rem 1rem',
  outline: 'none',
  border: '1px solid',
  borderRadius: '.5rem',
});
