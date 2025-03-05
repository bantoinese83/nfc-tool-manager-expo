import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScanScreen from '../screens/index';

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  useEffect(() => {
    window.frameworkReady?.();
  }, []);

  return (
    <>
      <Header />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
      </Stack>
      <Footer />
      <StatusBar style="auto" />
    </>
  );
}
