import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
    base: {
        backgroundColor: "rgb(22, 27, 34)",
        width: '30px',
        height: '30px',
        borderRadius: '2px',
        justifySelf: 'center',
        position: 'relative',
    },

    variants: {
      cleaned: {
          perfect: {
              backgroundColor: '#39d353',
          },
          almost: {
              backgroundColor: '#26a641',
          },
          half: {
              backgroundColor: '#006d32',
          },
          maybe: {
              backgroundColor: '#0e4429',
          },
          no: {
              backgroundColor: 'rgb(22, 27, 34)',
          }
      }
    },

    defaultVariants: {

    }
});
