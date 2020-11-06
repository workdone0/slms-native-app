import React from 'react';
import {
  Container,
  Header,
  Content,
  H1,
  Body,
  Left,
  Right,
  Title,
} from 'native-base';

import FooterMain from '../components/footerMain';
import HeaderMain from '../components/headerMain';

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <HeaderMain />
        <Content style={{backgroundColor: 'black'}}>
          <H1>Dashboard</H1>
        </Content>
        <FooterMain />
      </Container>
    );
  }
}

export default Dashboard;
