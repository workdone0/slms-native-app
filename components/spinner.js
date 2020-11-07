import React from 'react';
import {Container, Header, Content, Spinner} from 'native-base';
import {StyleSheet} from 'react-native';

class SpinnerComponent extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Spinner color="red" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default SpinnerComponent;
