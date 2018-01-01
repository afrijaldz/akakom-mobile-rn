import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    drawerLabel: 'Profil',
    drawerIcon:  (
      <Icon
      name='user'
      type='entypo'
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

export default Profil;