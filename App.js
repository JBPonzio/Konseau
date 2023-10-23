// In App.js in a new project
import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
import GetStartedScreen from './screens/GetStartedScreen';
import DivisionScreen from "./screens/DivisionScreen";
import ProfilScreen from "./screens/ProfilScreen";
import FormScreen from "./screens/FormScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Request from "./data/Request";

const Tab = createBottomTabNavigator();


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    render() {
        // initialisation des données
        // const foyer = Request.getFoyer(this.state);
        // console.log(this.state);
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarButton: [
                            "welcome",
                            "form"
                        ].includes(route.name)
                            ? () => {
                                return null;
                            }
                            : undefined,
                    })}>
                    <Tab.Screen name="welcome" component={GetStartedScreen} options={{
                        tabBarStyle: {display: "none"},
                        headerShown: false,
                    }}/>
                    <Tab.Screen name="form" component={FormScreen} options={{
                        tabBarStyle: {display: "none"},
                        tabBarIconStyle: {display: "none"},
                        headerShown: false,
                    }}/>
                    <Tab.Screen name="Tableau de bord" component={HomeScreen} options={{
                        tabBarActiveBackgroundColor: '#08374b',
                        tabBarActiveTintColor: '#FFFFFF',
                        headerShown: false,
                        tabBarInactiveBackgroundColor: '#0a2133',
                        tabBarInactiveTintColor: '#FFFFFF',
                        tabBarIcon: () => (
                            <MaterialIcons name="dashboard" color={'#FFFFFF'} size={20}/>
                        ),
                    }}/>
                    <Tab.Screen name="Répartition" component={DivisionScreen} options={{
                        tabBarActiveBackgroundColor: '#08374b',
                        tabBarActiveTintColor: '#FFFFFF',
                        headerShown: false,
                        tabBarInactiveBackgroundColor: '#0a2133',
                        tabBarInactiveTintColor: '#FFFFFF',
                        borderTopColor: '#0a2133',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="chart-donut" color={'#FFFFFF'} size={20}/>
                        ),
                    }}/>
                    <Tab.Screen name="Détails" component={DetailScreen} options={{
                        tabBarActiveBackgroundColor: '#08374b',
                        tabBarActiveTintColor: '#FFFFFF',
                        headerShown: false,
                        tabBarInactiveBackgroundColor: '#0a2133',
                        tabBarInactiveTintColor: '#FFFFFF',
                        borderTopColor: '#0a2133',
                        tabBarIcon: () => (
                            <AntDesign name="barschart" size={24} color='#FFFFFF'/>
                        ),
                    }}/>
                    <Tab.Screen name="Profil" component={ProfilScreen} options={{
                        tabBarActiveBackgroundColor: '#08374b',
                        tabBarActiveTintColor: '#FFFFFF',
                        headerShown: false,
                        tabBarInactiveBackgroundColor: '#0a2133',
                        tabBarInactiveTintColor: '#FFFFFF',
                        borderTopColor: '#0a2133',
                        tabBarIcon: () => (
                            <FontAwesome name="user" size={20} color='#FFFFFF'/>
                        ),
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}