import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
   base: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       color: 'white',
   }
});
