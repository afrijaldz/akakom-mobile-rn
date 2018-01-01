import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../components';
import profil from '../data/profil';

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Profil',
    drawerIcon:  (
      <Icon
      name='user'
      type='entypo'
      color='#00aced' />
    ),
    headerTitle: 'Profil',
    headerStyle: {
      elevation: 0,
      marginHorizontal: 0,
    },
    headerLeft: <Icon name="menu" color='#fff' iconStyle={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })

  render() {
    return (
      <ScrollView>
        <View>
          <Card>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Profil AKAKOM</Text>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{
                  uri: 'http://akakom.000webhostapp.com/images/logoemas.jpg'
                }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
              <Text>
                {profil.profil}
              </Text>
          </Card>
          <Card>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Visi</Text>
            <View style={{ alignItems: 'center' }}>
            </View>
              <Text>
                {profil.visi}
              </Text>
          </Card>
          <Card>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Misi</Text>
            <View style={{ alignItems: 'center' }}>
            </View>
              <Text>
                {profil.misi}
              </Text>
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Tujuan</Text>
            <View style={{ alignItems: 'center' }}>
            </View>
              <Text>
                {profil.tujuan}
              </Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Profil;