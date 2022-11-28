// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
<<<<<<< HEAD
import GetStartedScreen from './screens/GetStartedScreen';
=======
import DivisionScreen from "./screens/DivisionScreen";
import ProfilScreen from "./screens/ProfilScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
>>>>>>> 9533a57b0d068a0fbae68b8b89538e48b6748106

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer >
<<<<<<< HEAD
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#101010',
                        color: '#FFFFFF',
                    }
                }}>
                <Stack.Screen name="getStarted" component={GetStartedScreen} options={{ tabBarLabel: 'Konstan' }}
                />
                <Stack.Screen name="home" component={HomeScreen} options={{ tabBarLabel: 'Konstan' }}
                />
                <Stack.Screen name="detail" component={DetailScreen} />
            </Stack.Navigator>
=======
            <Tab.Navigator>
                <Tab.Screen name="Tableau de bord" component={HomeScreen} options={{
                    tabBarActiveBackgroundColor: '#08374b',
                    tabBarActiveTintColor: '#FFFFFF',
                    headerShown:false,
                    tabBarInactiveBackgroundColor: '#0a2133',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarIcon: () => (
                        <MaterialIcons name="dashboard" color={'#FFFFFF'} size={20} />
                    ),
                }}/>
                <Tab.Screen name="Répartition" component={DivisionScreen} options={{
                    tabBarActiveBackgroundColor: '#08374b',
                    tabBarActiveTintColor: '#FFFFFF',
                    headerShown:false,
                    tabBarInactiveBackgroundColor: '#0a2133',
                    tabBarInactiveTintColor: '#FFFFFF',
                    borderTopColor: '#0a2133',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="chart-donut" color={'#FFFFFF'} size={20} />
                    ),
                }}/>
                <Tab.Screen name="Détails" component={DetailScreen} options={{
                    tabBarActiveBackgroundColor: '#08374b',
                    tabBarActiveTintColor: '#FFFFFF',
                    headerShown:false,
                    tabBarInactiveBackgroundColor: '#0a2133',
                    tabBarInactiveTintColor: '#FFFFFF',
                    borderTopColor: '#0a2133',
                    tabBarIcon: () => (
                        <AntDesign name="barschart" size={24} color='#FFFFFF' />
                    ),
                }}/>
                <Tab.Screen name="Profil" component={ProfilScreen} options={{
                    tabBarActiveBackgroundColor: '#08374b',
                    tabBarActiveTintColor: '#FFFFFF',
                    headerShown:false,
                    tabBarInactiveBackgroundColor: '#0a2133',
                    tabBarInactiveTintColor: '#FFFFFF',
                    borderTopColor: '#0a2133',
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={20} color='#FFFFFF'  />
                    ),
                }}/>
            </Tab.Navigator>
>>>>>>> 9533a57b0d068a0fbae68b8b89538e48b6748106
        </NavigationContainer>
    );
}
