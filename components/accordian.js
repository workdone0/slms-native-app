import React, {Component} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import {View, Text} from 'react-native';

export default class Accord extends Component {
  render() {
    const leave = this.props.leave;
    return (
      <Collapse style={{padding: 10}}>
        <CollapseHeader>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              padding: 4,
            }}>
            <Text style={{color: 'white', fontSize: 30}}>{leave.purpose}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={{fontSize: 20, margin: 4}}>From: {leave.from}</Text>
          <Text style={{fontSize: 20, margin: 4}}>To: {leave.to}</Text>
          <Text style={{fontSize: 20, margin: 4}}>
            Purpose: {leave.purpose}
          </Text>
          <Text style={{fontSize: 20, margin: 4}}>Place: {leave.place}</Text>
          <Text style={{fontSize: 20, margin: 4}}>
            Phone: {leave.alternate_phone}
          </Text>
          <Text style={{fontSize: 20, margin: 4}}>Status: {leave.status}</Text>
        </CollapseBody>
      </Collapse>
    );
  }
}
