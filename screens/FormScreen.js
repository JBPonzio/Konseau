import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {getProgress} from "../charts/ProgressChart";
import {getbar} from "../charts/BarChart";
import * as React from "react-native";
import {Dimensions} from "react-native";

const screenHeight = Dimensions.get('window').height;

export default function ({ navigation }) {

    return (
        <View style={{flex: 1}}>
        </View>
    )
}