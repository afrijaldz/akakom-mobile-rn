import React from 'react';
import { View, Dimensions } from 'react-native';

const { height: viewPortHeight, width: viewPortWidth } = Dimensions.get('window');

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    padding: 15,
  }
}

export { Card };