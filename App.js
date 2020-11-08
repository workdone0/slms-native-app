import React from 'react';
import {View, Text, StatusBar, Root} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';
import Dashboard from './screens/Dashboard';
import ApplyLeave from './screens/ApplyLeave';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Apply" component={ApplyLeave} />
          <Stack.Screen name="Profile" component={ApplyLeave} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
