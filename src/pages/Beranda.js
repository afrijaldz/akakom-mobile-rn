import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import beranda from '../data/beranda';

class Beranda extends Component {  
  constructor(props) {
    // console.log('ini props', props.navigation.navigate('DrawerOpen'));
    super(props);

    this.state = {
      data: '',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Beranda',
    drawerIcon:  (
      <Icon
      name='home'
      color='#00aced' />
    ),
    headerTitle: 'Beranda',
    headerStyle: {
      elevation: 0,
    },
    headerLeft: <Icon name="menu" color='#fff' iconStyle={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })

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
        <View>
          <Text style={{marginBottom: 10}}>
            {item.content}
          </Text>
          <Text style={{ color: '#03A9F4' }} onPress={() => this.props.navigation.navigate('Detail', { data: item })}>
            Baca selengkapnya...
          </Text>
        </View>
      </Card>
    );
  }

  render() {
    return (
      <View style={{ paddingBottom: 10 }}>
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