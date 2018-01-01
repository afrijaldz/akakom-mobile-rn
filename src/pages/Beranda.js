import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import beranda from '../data/beranda';

class Beranda extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  }

  static navigationOptions = {
    drawerLabel: 'Beranda',
    drawerIcon:  (
      <Icon
      name='home'
      color='#00aced' />
    ),
    headerTitle: 'Beranda',
    // headerLeft: <Icon iconStyle={{ paddingLeft: 10 }} name="menu" onPress={() => this.props.navigation.navigate('DrawerToggle')} />
  }

  componentWillMount() {
    this.setState({ data: beranda });
  }

  componentDidMount() {
    this.setState({ data: beranda.data });
    console.log(this.state.data);
  }

  renderBeranda(item, index) {
    return (
      <Card
        title={item.title}
        image={{ uri: item.image}}>
        <Text style={{marginBottom: 10}}>
          {item.content}
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, key) => key}
          renderItem={({ item, index }) => this.renderBeranda(item, index)}
        />
      </View>
    );
  }
}

export default Beranda;