import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Title} from 'native-base';
import {StyleSheet} from 'react-native';
export default class HeaderMain extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Title style={styles.title}>Dashboard</Title>
        </Left>
        <Body />
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flex: 2,
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
  header: {
    backgroundColor: 'white',
  },
});
