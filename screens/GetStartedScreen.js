import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getProgress } from "../charts/ProgressChart";
import { getbar } from "../charts/BarChart";
import * as React from "react-native";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;

export default function ({ navigation }) {

    const goToHome = () => navigation.navigate("Tableau de bord");
    const goToForm = () => navigation.navigate("form");
    let firstConnection = true;

    // si il ne s'agit pas de la première connexion renvoie sur la page du tableau de bord
    if (!firstConnection) {
        return goToHome();
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor={'#101010'} />
            <View style={homeStyle.base}>
                <View style={homeStyle.header}>
                    {/* Affichage du logo de l'application */}
                    <Image style={homeStyle.imageHeader} source={require('../assets/konseau.png')} />
                </View>
                <View>
                    {/* Affichage du texte de bienvenu sur l'application */}
                    <Text style={homeStyle.texteItem} title='GetStarted'>Bienvenu sur Konseau votre application de consommation d'eau.{"\n"} Cliquez sur 'Commencer' pour gérer votre Konseau</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => { goToForm() }}>
                        <LinearGradient colors={['#82C9E8', '#20A7E2']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }} style={homeStyle.body}>
                            <Text style={homeStyle.headItemBold} title='GetStarted'>GET STARTED</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
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
        flexDirection: 'column',
        alignContent: 'flex-start',
        height: 50,
        marginBottom: 20,
        marginTop: 20,
        flex: 1.1
    },
    imageHeader: {
        width: 300,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: 100
    },
    textHead: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    texteItem: {
        color: '#FFFFFF',
        fontSize: 17,
        padding: 50,
        alignSelf: 'center',
        textAlign: 'center'
    },
    body: {
        backgroundColor: '#0a2133',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        padding: 15,
        margin: 100,
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
    headItemBold: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',

    },
    divider: {
        borderLeftColor: '#FFFFFF',
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        height: 100,
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