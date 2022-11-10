import {Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {getbar} from "../charts/BarChart";
import * as React from "react-native";

const screenHeight = Dimensions.get('window').height;

export default function ({navigation}) {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex:1}}>
                <StatusBar style="light" backgroundColor={'#101010'}/>
                <View style={homeStyle.base}>
                    <View style={homeStyle.header}>
                        <Text style={homeStyle.textHead}>KONSEAU</Text>
                        <Image style={homeStyle.imageHeader} source={require('../assets/image.png')}/>
                    </View>
                    <LinearGradient colors={['#09374c', '#0b0f1e']} start={{ x:0.5, y:0 }} end={{ x: 0, y: 0.5 }} style={homeStyle.body}>
                        <View style={homeStyle.item}>
                            <Text style={homeStyle.headItem} title='Détails conso'>Ma conso en détail</Text>
                            {getbar()}
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    )
}

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
        alignSelf: 'center',
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