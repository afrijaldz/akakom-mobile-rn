import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import beranda from '../data/beranda';

class Beranda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  }

  componentWillMount() {
    this.setState({ data: beranda });
  }

  componentDidMount() {
    this.setState({ data: beranda.data });
    console.log(this.state.data);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, key) => key}
          renderItem={({ item, index }) => (
            <Card>
              <Text>
                {item.content}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

export default Beranda;