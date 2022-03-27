import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '2rem',
  height: 'auto',
  alignItems: 'center',
  fontSize: '1.2rem',
  marginBottom: '2rem',
});

export const input = style({
  padding: '.5rem 1rem',
  outline: 'none',
  border: '1px solid',
  borderRadius: '.5rem',
  background: 'transparent',
  fontSize: '1.2rem',
});
