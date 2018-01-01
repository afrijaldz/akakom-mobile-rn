import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import info from '../data/info';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Info',
    drawerIcon:  (
      <Icon
      name='info-outline'
      color='#00aced' />
    ),
    headerTitle: 'Info',
    headerStyle: {
      elevation: 0,
      marginHorizontal: 0,
    },
    headerLeft: <Icon name="menu" color='#fff' iconStyle={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })

  componentDidMount() {
    this.setState({ data: info.data });
  }

  renderItem(item, index) {
    return (
      <Card title={item.title}>
        <Text>{item.content}</Text>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={( data, index ) => index}
            renderItem={({ item, index }) => this.renderItem(item, index)}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Info;