import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
    base: {
        display: 'flex',
        alignItems: 'flex-start'
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
