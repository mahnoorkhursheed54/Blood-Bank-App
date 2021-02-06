import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Home from '../screens/Home';
import Register from '../screens/Register'
import Donor from '../screens/Donor';
import BloodBank from '../screens/BloodBank';
import About from '../screens/About';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MK Blood Bank" component={Main} />
          <Stack.Screen name="Login Page" component={Home} />
          <Stack.Screen name="Registration Page" component={Register} />
          <Stack.Screen name="Donor Details" component={Donor} />
          <Stack.Screen name="Blood Bank" component={BloodBank} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;