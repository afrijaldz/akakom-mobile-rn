import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    drawerLabel: 'Info',
    drawerIcon:  (
      <Icon
      name='info-outline'
      color='#00aced' />
    ),
  }

  render() {
    return (
      <View>
        <Text>
          Oke
        </Text>
      </View>
    );
  }
}

export default Info;