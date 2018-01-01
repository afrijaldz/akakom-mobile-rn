import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../components';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    drawerLabel: 'Info',
    drawerIcon:  (
      <Icon
      name='info-outline'
      color='#00aced' />
    ),
  }

  render() {
    return (
      <ScrollView>
        <View>

          <Card>
            <Text style={{ fontSize: 24 }}>Profil AKAKOM</Text>
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
              
              </Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Info;