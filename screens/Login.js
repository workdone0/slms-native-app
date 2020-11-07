import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  H1,
  H3,
  Button,
  Text,
} from 'native-base';

import {studentLogin} from '../api/student_login';
import {setStudentToken} from '../modules/SetStudentToken';
import Toast from 'react-native-simple-toast';
import SpinnerComponent from '../components/spinner';
import {connect} from 'react-redux';

import {setCurrentUser} from '../redux/user/user.actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  handleEmailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  handlePasswordChange = (text) => {
    this.setState({
      password: text,
    });
  };

  handleSubmit = async () => {
    this.setState({
      loading: true,
    });
    const response = await studentLogin(this.state.email, this.state.password);
    if (response.status === 200) {
      const responseSetToken = await setStudentToken(response.data.token);
      console.log(response);
      this.props.setCurrentUser(response.data.user);
      this.props.navigation.navigate('Dashboard');
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
      Toast.show('Authentication Failed');
    }
  };

  render() {
    if (this.state.loading) {
      return <SpinnerComponent />;
    }
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.h1}>Hello,</Text>
          <H3 style={styles.h3}>Sign In to your account.</H3>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={this.handleEmailChange}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={this.handlePasswordChange}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
          </Form>
          <Button
            onPress={this.handleSubmit}
            style={styles.button}
            rounded
            block
            dark>
            <Text> Login </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column',
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 20,
    marginHorizontal: 80,
  },
  h1: {
    fontSize: 60,
  },
  h3: {
    fontSize: 25,
    backgroundColor: '#000',
    color: '#fff',
    padding: 4,
    borderRadius: 3,
  },
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
