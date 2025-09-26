import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './app/navigation/BottomTabs';
import { I18nManager } from 'react-native';

if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}