import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { Platform } from 'react-native';

import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';
import PlacesListScreen from '../screens/PlacesListScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator({
  Places: {screen: PlacesListScreen},
  PlaceDetail: PlacesDetailScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default createAppContainer(PlacesNavigator)