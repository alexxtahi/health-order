import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import BottomTabs from './basics/BottomTabs';

export default function App() {
  const userTheme = useColorScheme();
  // Rendu du composant
  return (
    <NavigationContainer theme={userTheme === 'dark' ? theme.dark : theme.light}>
      <BottomTabs />
    </NavigationContainer>
  );
}

// Thèmes de l'application
const theme = {
  light: {
    dark: false,
    colors: {
      primary: '#222',
      background: '#fff',
      card: '#ddd',
      text: '#222',
      border: '#ddd',
      notification: '#F7D2A5',
    }
  },
  dark: {
    dark: true,
    colors: {
      primary: '#fff',
      background: '#222',
      card: '#333',
      text: '#fff',
      border: '#ddd',
      notification: '#F7D2A5',
    },
  }
};