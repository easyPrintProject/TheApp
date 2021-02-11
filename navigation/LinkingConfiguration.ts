import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          AppStart: {
            screens: {
              AppStartScreen: 'one',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
