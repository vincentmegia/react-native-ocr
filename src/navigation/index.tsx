import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Camera from '../containers/camera';
import Home from '../containers/home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </Stack.Navigator>
  );
};
