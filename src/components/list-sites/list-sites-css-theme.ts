import { Theme } from "@aws-amplify/ui-react";

export const themeSearch: Theme = {
    name: 'searchfield-theme',
    tokens: {
      components: {
        searchfield: {
          button: {
            color: { value: '{colors.blue.80}' },
            backgroundColor: { value: '{colors.blue.20}' },
            _focus: {
              backgroundColor: {
                value: '{colors.blue.60}',
              },
              color: { value: 'white' },
            },
            _hover: {
              backgroundColor: {
                value: '{colors.blue.80}',
              },
              color: { value: 'white' },
            },
          },
        },
      },
    },
  };

  export const themePagintaion: Theme = {
    name: 'pagination-theme',
    tokens: {
      components: {
        pagination: {
          current: {
            backgroundColor: { value: '{colors.brand.white}' },
            color :{ value: '{colors.brand.black}'}
          },
          button: {
          
            hover: {
              backgroundColor: { value: '{colors.brand.white}' },
            color :{ value: '{colors.brand.black}'}
            },
          },
        },
      },
    },
  };