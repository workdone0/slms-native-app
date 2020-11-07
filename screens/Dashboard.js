import React from 'react';
import {Container, Content} from 'native-base';
import {connect} from 'react-redux';

import FooterMain from '../components/footerMain';
import HeaderMain from '../components/headerMain';
import Accord from '../components/accordian';
import {studentLeave} from '../api/leaves';
import SpinnerComponent from '../components/spinner';

class Dashboard extends React.Component {
  state = {loading: true, leaves: []};
  async componentDidMount() {
    const response = await studentLeave(this.props.currentUser._id);
    this.setState({
      loading: false,
      leaves: response.data.leaves,
    });
  }
  render() {
    if (this.state.loading) {
      return <SpinnerComponent />;
    }
    return (
      <Container>
        <HeaderMain />
        <Content>
          {this.state.leaves.map((leave) => {
            return <Accord key={leave._id} leave={leave} />;
          })}
        </Content>
        <FooterMain />
      </Container>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Dashboard);
