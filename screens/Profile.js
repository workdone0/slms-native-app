import React from 'react';
import {Container, Content, Text} from 'native-base';
import FooterMain from '../components/footerMain';

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hi from Profile</Text>
        </Content>
        <FooterMain navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Profile;
