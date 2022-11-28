// In App.js in a new project
import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
import DivisionScreen from "./screens/DivisionScreen";
import ProfilScreen from "./screens/ProfilScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import LocalDatabaseManager from "./data/db";


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    render() {
        LocalDatabaseManager.initializeDatabase();
        LocalDatabaseManager.insertConso();
        let results = LocalDatabaseManager.getConso().then(r => console.log('Conso récupérée'));
        console.log(results);
        // const db = SQLite.openDatabase('database.db'); // returns Database object
        // db.transaction((tx) => {
        //     tx.executeSql('SELECT * FROM conso;', [], (tx, resultSet) => {
        //         console.log('ok',resultSet.rows._array);
        //         this.setState({data: resultSet.rows._array})})
        // })
        // console.log(this.state)
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
            </NavigationContainer>
        );
    }
}
