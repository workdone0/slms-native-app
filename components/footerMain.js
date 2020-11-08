import React, {Component} from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterMain extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Icon name="home" size={18} />
            <Text style={{color: 'black'}}>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Apply')}>
            <Icon name="send" size={18} />
            <Text style={{color: 'black'}}>Apply</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="user" size={18} />
            <Text style={{color: 'black'}}>Profile</Text>
          </Button>
          <Button vertical>
            <Icon name="sign-out" size={18} />
            <Text style={{color: 'black'}}>Logout</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
