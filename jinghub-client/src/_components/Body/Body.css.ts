import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5vw',
        width: '90%'
    } ,

    variants: {
        'flex-direction': {
            'column': {
                flexDirection: 'column',
            },
            'row': {
                flexDirection: 'row',
            }
        }
    },

    defaultVariants: {
        'flex-direction': 'row',
    }
});
