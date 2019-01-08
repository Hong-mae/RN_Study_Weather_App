import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropType from 'prop-types';

const weatherCase = {
    Rain: {
        color:["#00c6fb", "#005bea"],
        title: "It's Raining",
        content: "우산 챙기세요!",
        icon: "weather-rainy",
    },
    Clear:{
        color:["#FEF253", "#FF7300"],
        title: "It's Sunny",
        content: "날씨가 좋아요!!",
        icon: "weather-sunny",
    },
    Thunderstorm:{
        color:["#00ECBC", "#007ADF"],
        title: "Thunderstorm!!",
        content: "천둥과 번개를 조심해요!",
        icon: "weather-lightning",
    },
    Clouds:{
        color:["#d7d2cc", "#304352"],
        title: "It's Cloudy",
        content: "하늘이 흐려요..",
        icon: "weather-cloudy",
    },
    Snow:{
        color:["#7de2fc", "#b9b6e5"],
        title: "It's Snowy",
        content: "하늘에서 눈이 내려요~",
        icon: "weather-snowy",
    },
    Drizzle:{
        color:["#89f7fe", "#66a6ff"],
        title: "It's Drizzle",
        content: "촉촉한 이슬비가 내려요!",
        icon: "weather-hail",
    },
    Haze:{
        color:["#d7d2cc", "#304352"],
        title: "It's Haze",
        content: "안개가 꼈어요!",
        icon: "weather-fog",
    },
    Mist:{
        color:["#d7d2cc", "#304352"],
        title: "It's Mist",
        content: "안개를 조심하세요!",
        icon: "weather-fog",
    },
}

export default Weather;

function Weather({weatherName, temp}) {
    console.log(weatherName);
    return (
        <LinearGradient
            colors={weatherCase[weatherName].color}
            style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={114} name={weatherCase[weatherName].icon}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCase[weatherName].title}</Text>
                <Text style={styles.content}>{weatherCase[weatherName].content}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propType = {
    temp: PropType.number.isRequired,
    weatherName: PropType.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 25,
    },
    title: {
        fontSize: 38,
        color: 'white',
        marginBottom: 10
    },
    content: {
        fontSize: 24,
        color: 'white',
        marginBottom: 24
    },
    temp: {
        fontSize: 48,
        color: "white"
    }
});