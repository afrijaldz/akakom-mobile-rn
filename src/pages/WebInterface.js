import React, { Component } from 'react';
import { WebView } from 'react-native';

class WebInterface extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        source={{ uri: 'http://google.com' }}
      />
    );
  }
}

export default WebInterface;