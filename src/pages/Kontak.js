import React, { Component } from 'react';
import { View, Text, TextInput, Linking } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';

class Tautan extends Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Kontak',
    drawerIcon:  (
      <Icon
      name='link'
      color='#00aced' />
    ),
    headerTitle: 'Kontak',
    headerStyle: {
      elevation: 0,
      marginHorizontal: 0,
    },
    headerLeft: <Icon name="menu" color='#fff' iconStyle={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })

  linkingUrl(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View>
        <Card>
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Email</Text>
          <TextInput />
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Pesan</Text>
          <TextInput />
          <View style={{ marginTop: 20 }}>
            <Button title="Kirim" backgroundColor="#009688" />
          </View>
        </Card>
        <Card>
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Ikuti kami</Text>
          <View style={{ alignItems: 'flex-start', paddingTop: 10, flexDirection: 'row' }}>
            <Icon containerStyle={{ marginRight: 10 }} color="#009688" name="facebook" type="entypo" size={30} onPress={() => this.linkingUrl('http://facebook.com/akakomyogya')} />
            <Icon containerStyle={{ marginRight: 10 }} color="#009688" name="instagram" type="entypo" size={30} onPress={() => this.linkingUrl('http://instagram.com/stmikakakom')} />
            <Icon containerStyle={{ marginRight: 10 }} color="#009688" name="twitter" type="entypo" size={30} onPress={() => this.linkingUrl('http://twitter.com/therealakakom')} />
          </View>
        </Card>
      </View>
    );
  }
}

export default Tautan;