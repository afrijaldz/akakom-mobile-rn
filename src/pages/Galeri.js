import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import galeri from '../data/galeri';

const { width: viewPortWidth, height: viewPortHeight } = Dimensions.get('window');

class Galeri extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Galeri',
    drawerIcon:  (
      <Icon
      name='perm-media'
      color='#00aced' />
    ),
    headerTitle: 'Galeri',
    headerStyle: {
      elevation: 0,
      marginHorizontal: 0,
    },
    headerLeft: <Icon name="menu" color='#fff' iconStyle={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })

  componentDidMount() {
    this.setState({ data: galeri.data });
    console.log(this.state.data);
  }

  renderContent(item, index) {
    return (
      <View style={{ alignItems: 'center', paddingTop: 3 }}>
        <Image style={{ width: viewPortWidth - 10, height: viewPortHeight / 3 }} source={{ uri: item.gambar }} />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, key) => key}
          renderItem={({ item, index }) => this.renderContent(item, index)}
        />
      </View>
    );
  }
}

export default Galeri;