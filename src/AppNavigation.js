import { React } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import config from './config';

import Beranda from './pages/Beranda';
import Galeri from './pages/Galeri';
import Info from './pages/Info';
import Profil from './pages/Profil';
import Tautan from './pages/Tautan';

const { width: viewPortWidth, height: viewPortHeight } = Dimensions.get('window');

const primaryHeader = {
  backgroundColor: config.color.primary,
  elevation: 0,
  borderBottomWidth: 0,
}

const DrawerNavigation = DrawerNavigator({
  Beranda: { screen: Beranda },
  Galeri: { screen: Galeri },
  Info: { screen: Info },
  Profil: { screen: Profil },
  Tautan: { screen: Tautan },
});

// StackNavigation
const AppNavigation = StackNavigator({
  Beranda: { screen: DrawerNavigation },
  Galeri: { screen: Galeri },
  Info: { screen: Info },
  Profil: { screen: Profil },
  Tautan: { screen: Tautan },
}, {
  initialRouteName: 'Beranda',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#00aced',
    },
  }
});

export default AppNavigation;