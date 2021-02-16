import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Start: {
        screens:{
          AppStart: {
            screens: {
              AppStartScreen: 'one',
            },
          },
        }
      },
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
