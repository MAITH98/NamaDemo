import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import MainScreen from './MainScreen';
import HomeScreen from './home';
import Profile from './profile';
import Redeem from './redeem';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Splash is always registered */}
        <Stack.Screen name="Splash">
          {props => (
            <SplashScreen
              {...props}
              onFinish={() => {
                // After Splash, navigate based on login state
                if (isLoggedIn) {
                  props.navigation.replace('Home');
                } else {
                  props.navigation.replace('Main');
                }
              }}
            />
          )}
        </Stack.Screen>

        {/* Main (login) screen */}
        <Stack.Screen name="Main">
          {props => (
            <MainScreen
              {...props}
              onLoginSuccess={() => {
                setIsLoggedIn(true);
                // Replace current stack with Home
                props.navigation.replace('Home');
              }}
            />
          )}
        </Stack.Screen>

        {/* Home screen */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Additional screens */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Redeem" component={Redeem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
