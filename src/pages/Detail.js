import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  }

  componentDidMount() {    
    this.setState({ data: this.props.navigation.state.params.data });
    console.log(this.state.data);
  }

  render() {
    const { title, more, content, date, image } = this.state.data;

    return (
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Card
            title={title}
            image={{ uri: image }}>
            <View>
              <Text>
                {more}
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Detail;