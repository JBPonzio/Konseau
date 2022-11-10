// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
import GetStartedScreen from './screens/GetStartedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
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
        </NavigationContainer>
    );
}
