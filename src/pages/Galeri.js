import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Galeri extends Component {
  static navigationOptions = {
    drawerLabel: 'Galeri',
    drawerIcon:  (
      <Icon
      name='perm-media'
      color='#00aced' />
    ),
  }

  render() {
    return (
      <View>
        <Text>
          Okeee
        </Text>
      </View>
    );
  }
}

export default Galeri;