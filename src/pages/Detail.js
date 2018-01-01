import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Detail extends Component {
  render() {
    console.log(this.props.navigation);

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>
        </Text>
      </View>
    );
  }
}

export default Detail;