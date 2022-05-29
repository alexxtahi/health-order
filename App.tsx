import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import BottomTabs from './basics/BottomTabs';

const lightTheme = {
  dark: false,
  colors: {
    primary: '#222',
    background: '#fff',
    card: '#ddd',
    text: '#222',
    border: '#ddd',
    notification: '#F7D2A5',
  },
};

const darkTheme = {
  dark: false,
  colors: {
    primary: '#fff',
    background: '#222',
    card: '#ddd',
    text: '#fff',
    border: '#ddd',
    notification: '#F7D2A5',
  },
};

export default function App() {
  const userTheme = useColorScheme();
  console.log('[INFO] User theme: ' + userTheme);
  // Rendu du composant
  return (
    <NavigationContainer theme={userTheme === 'dark' ? darkTheme : lightTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
}
