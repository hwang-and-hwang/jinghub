import { style } from '@vanilla-extract/css';

export const root = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    marginTop: '1rem'
});

export const content = style({
    display: 'flex',
    flexDirection: "column",
    gap: '1rem',
    userSelect: 'none'
});

export const container = style({
    position: 'relative',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    height: '30px',
    cursor: 'pointer'
})

export const label = style({
    paddingLeft: '2.5em',
});

export const checkbox = style({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    width: 0,
    height: 0
})

export const checkmark = style({
    backgroundColor: '#eee',
    width: '25px',
    height: '25px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    selectors: {
        [`${checkbox}:checked ~ &`] : {
            backgroundColor: '#2196F3'
        },
        '&:after': {
            content: "",
            position: 'absolute',
            display: 'none',
        },
        [`${checkbox}:checked ~ &:after`]: {
            display: 'block',
            left: '9px',
            top: '5px',
            width: '5px',
            height: '10px',
            border: 'solid white',
            borderWidth: '0 3px 3px 0',
            transform: 'rotate(45deg)',
        },
    }
});

export const file = style({
    visibility: 'hidden',
});

export const button = style({
    width: '80%',
    height: '2.4rem',
    fontSize: '1.2rem',
    background: 'none',
    color: 'white',
    border: 'solid white',
    borderRadius: '8px',
    alignSelf: 'center',
    marginTop: '2rem'
})
