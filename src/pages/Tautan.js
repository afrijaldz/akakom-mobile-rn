import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Tautan extends Component {

  static navigationOptions = {
    drawerLabel: 'Tautan',
    drawerIcon:  (
      <Icon
      name='link'
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

export default Tautan;