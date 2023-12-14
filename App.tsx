// Atualização em App.tsx
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './src/navigation/tabs';
import { CartProvider } from './src/context/cart';
import LoginScreen from './src/pages/login';
import SignUpScreen from './src/pages/signup';
import CheckoutScreen from './src/pages/checkout';
import FavoritesScreen from './src/pages/favorites';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />

        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </CartProvider>
  );
}
