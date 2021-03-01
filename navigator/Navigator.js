import {createStackNavigator} from '@react-navigation/stack'
import Dialogs from '../components/logicComponents/Dialogs/Dialogs'
import Friends from '../components/logicComponents/Friends/Friends'
import Login from '../components/logicComponents/Login/Login'
import MyProfile from '../components/logicComponents/MyProfile/MyProfile'
import Navbar from '../components/viewComponents/Navbar/Navbar'
import React from 'react'

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
        headerMode='float'
        screenOptions={{header : (props)=><Navbar {...props}/>, animationEnabled : false}}
    >
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
      />
      <Stack.Screen
        name="Dialogs"
        component={Dialogs}
      />
      <Stack.Screen 
        name="Friends"
        component={Friends}
        
      />
      <Stack.Screen 
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  ); 
}

export default Navigator