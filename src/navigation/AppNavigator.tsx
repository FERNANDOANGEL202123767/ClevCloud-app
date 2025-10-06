import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@/screens/Home/HomeScreen';
import { ProjectDetailScreen } from '@/screens/ProjectDetail/ProjectDetailScreen';
import { RootStackParamList } from '@/types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
