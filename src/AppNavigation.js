import { React } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Beranda from './pages/Beranda';
// import Galeri from './pages/Galeri';
// import Info from './pages/Info';
// import Profil from './pages/Profil';
// import Tautan from './pages/Tautan';


// StackNavigation 
const AppNavigation = StackNavigator({
  Beranda: { screen: Beranda },
  // Galeri: { screen: Galeri },
  // Info: { screen: Info },
  // Profil: { screen: Profil },
  // Tautan: { screen: Tautan },
}, {
  initialRouteName: 'Beranda',
});

export default AppNavigation;