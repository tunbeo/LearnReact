import * as React from 'react';
import { useState } from 'react';
import { Button, Text,TextInput, View } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';



function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }

export default function HomeScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <GoToButton screenName="Details" />
    </View>
  );
}
