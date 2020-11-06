import React, {Component} from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterMain extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="home" size={25} />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="send" size={25} />
            <Text>Apply</Text>
          </Button>
          <Button vertical>
            <Icon name="user" size={25} />
            <Text>Profile</Text>
          </Button>
          <Button vertical>
            <Icon name="sign-out" size={25} />
            <Text>Logout</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
