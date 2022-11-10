// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
import DivisionScreen from "./screens/DivisionScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer >
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
                <Tab.Screen name="Profil" component={DetailScreen} options={{
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
        </NavigationContainer>
    );
}
