// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Dimensions, StatusBar } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
// import {byYear, byDays} from "./charts/BarChart";
// import {getObjectif} from "./charts/ProgressChart";
import {getProgress} from "./charts/ProgressChart";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


 export default function App() {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex:1}}>
                <StatusBar style="light" backgroundColor={'#101010'}/>
                <View style={homeStyle.base}>
                    <View style={homeStyle.header}>
                        <Text style={homeStyle.textHead}>KONSEAU</Text>
                        <Image style={homeStyle.imageHeader} source={require('./assets/image.png')}/>
                    </View>
                    <LinearGradient colors={['#09374c', '#0b0f1e']} start={{ x:0.5, y:0 }} end={{ x: 0, y: 0.5 }} style={homeStyle.body}>
                        <View style={homeStyle.item}>
                            <Text style={homeStyle.headItem} title='Détails conso'>Aujourd'hui</Text>
                            {getProgress()}
                        </View>
                        <View style={homeStyle.item}>
                            <Text style={homeStyle.headItem} title='Détails conso'>Ce mois-ci</Text>
                            {getProgress()}
                        </View>
                    </LinearGradient>
                    <LinearGradient colors={['#09374c', '#0b0f1e']} start={{ x:0.5, y:0 }} end={{ x: 0, y: 0.5 }} style={homeStyle.body}>
                        <View style={homeStyle.item}>
                            <Text style={homeStyle.headItem} title='Détails conso'>Cette semaine</Text>
                            {getProgress()}
                        </View>
                        <View style={homeStyle.item}>
                            <Text style={homeStyle.headItem} title='Détails conso'>Cette année</Text>
                            {getProgress()}
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    )
}
const Stack = createNativeStackNavigator();

// function App() {
//     return (
//         <NavigationContainer >
//             <Stack.Navigator>
//                 <Stack.Screen name="home" component={HomeScreen} />
//                 <Stack.Screen name="detailConso" component={DetailConso} />
//                 <Stack.Screen name="detailUsage" component={DetailUsage} />
//                 <Stack.Screen name="compare" component={CompareConso} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const homeStyle = StyleSheet.create({
    base: {
        backgroundColor: '#101010',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'flex-start',
        minHeight: screenHeight,
        padding: 10,
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginBottom: 20,
        marginTop: 20,
    },
    imageHeader: {
        width: 60,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    textHead: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    body: {
        backgroundColor: '#0a2133',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        margin:5,
        marginBottom: 10,
    },
    lineItem: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginTop: 25,
    },
    headItem: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 20,
    },
    divider: {
        borderLeftColor: '#FFFFFF',
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        height:100,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textItem: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        height: 30,
        width: 120,
    },
    textRight: {
        borderLeftColor: '#FFFFFF',
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
    },
    chart: {
        paddingLeft: 0,
        paddingRight: 0
    }
});
