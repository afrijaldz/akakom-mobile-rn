import { React } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import config from './config';

import Beranda from './pages/Beranda';
import Galeri from './pages/Galeri';
import Info from './pages/Info';
import Profil from './pages/Profil';
import Kontak from './pages/Kontak';
import Detail from './pages/Detail';

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
  Kontak: { screen: Kontak },
});

// StackNavigation
const AppNavigation = StackNavigator({
  Beranda: { screen: DrawerNavigation },
  Galeri: { screen: DrawerNavigation },
  Info: { screen: DrawerNavigation },
  Profil: { screen: DrawerNavigation },
  Kontak: { screen: DrawerNavigation },
  Detail: { screen: Detail },
}, {
  initialRouteName: 'Beranda',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#00aced',
    },
    headerTintColor: '#fff',
  }
});

export default AppNavigation;