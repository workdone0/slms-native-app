import React from 'react';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';

import {setCurrentUser} from '../redux/user/user.actions';

import {GetStudentToken} from '../modules/GetStudentToken';
import {tokenVerifyStudent} from '../api/token_verify_student';

class SplashScreen extends React.Component {
  state = {
    redirect_to_login: false,
    redirect_to_dashboard: false,
    student_token: null,
  };

  componentDidMount = async () => {
    const response = await GetStudentToken();
    if (response === null) {
      this.setState({
        redirect_to_login: true,
        student_token: response,
      });
      this.props.navigation.navigate('Login');
    } else {
      const tokenVerifyResponse = await tokenVerifyStudent(response);
      if (tokenVerifyResponse.status === 200) {
        this.setState({
          redirect_to_dashboard: true,
          student_token: response,
        });
        this.props.setCurrentUser(tokenVerifyResponse.data.user);
        this.props.navigation.navigate('Dashboard');
      } else {
        this.setState({
          redirect_to_login: true,
          student_token: response,
        });
        this.props.navigation.navigate('Login');
      }
    }
  };

  render() {
    return (
      <LottieView
        source={require('../assets/animations/bouncy-car.json')}
        autoPlay
        loop
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SplashScreen);
