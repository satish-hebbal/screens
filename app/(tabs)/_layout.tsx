import React, { useCallback } from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import CustomTabBar from '@/components/CustomTabBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Bold': require('../../assets/fonts/Lexend-Bold.ttf'),
    'Lexend-Light': require('../../assets/fonts/Lexend-Light.ttf'),
    'Lexend-SemiBold': require('../../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Mid' : require('../../assets/fonts/Lexend-Medium.ttf'),
    'Source-Serif-Regular' : require('../../assets/fonts/Source-Serif-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs 
      tabBar={(props) => <CustomTabBar {...props} />}
      onLayout={onLayoutRootView}
    >
      <Tabs.Screen
        name="screen_1"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tabs.Screen
        name="screen_2"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: 'search',
        }}
      />
      <Tabs.Screen
        name="screen_3"
        options={{
          headerShown: false,
          title: 'Mandir',
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../../assets/images/mandir-icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="screen_4"
        options={{
          headerShown: false,
          title: 'Donation',
          tabBarIcon: 'favorite',
        }}
      />
      <Tabs.Screen
        name="screen_5"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: 'person',
        }}
      />
    </Tabs>
  );
}