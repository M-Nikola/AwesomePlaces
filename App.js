import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace';
import PlaceDetailsScreen from './src/screens/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponentWithRedux('awesome-places.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('awesome-places.FindPlaceScreen', () => FindPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux('awesome-places.SharePlaceScreen', () => SharePlaceScreen, Provider, store);
Navigation.registerComponentWithRedux('awesome-places.PlaceDetailsScreen',  () => PlaceDetailsScreen, Provider, store);
Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer);

// Start a App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "awesome-places.AuthScreen"
            },
          },
        ]
      }
    }
  });
});