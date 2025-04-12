import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { EventProvider } from './context/EventContext';

export default function App() {
  return (
    <EventProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </EventProvider>
  );
}