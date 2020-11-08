import React from 'react';
import {Container, Content, Text} from 'native-base';
import FooterMain from '../components/footerMain';
class ApplyLeave extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hello from Apply Leave</Text>
        </Content>
        <FooterMain navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default ApplyLeave;
