import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {GlobalStateProvider } from "./components/StateProvider";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <GlobalStateProvider>
            <Navigation colorScheme={colorScheme} />
          </GlobalStateProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
