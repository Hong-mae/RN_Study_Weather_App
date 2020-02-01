import React from 'react'
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native'
import propTypes from 'prop-types'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm : {
        iconName: 'weather-lightning-rainy',
        text: '',
        colors: ['#0f2027', '#203a43', '#2c5364']
    },
    Drizzle : {
        iconName: 'weather-hail',
        text: '',
        colors: ['#f2fcfe', '#1c92d2']
    },
    Rain : {
        iconName: 'weather-rainy',
        text: '',
        colors: ['#000428', '#004e92', "#2c3e50"]
    },
    Snow : {
        iconName: 'weather-snowy',
        text: '',
        colors: ['#ACB6E5','#74ebd5']
    },
    Clear : {
        iconName: 'weather-sunny',
        text: '',
        colors: ['#0ED2F7', '#B2FEFA']
    },
    Clouds : {
        iconName: 'weather-cloudy',
        text: '',
        colors: ["#141e30", '#243b55']
    },
    Mist : {
        iconName: 'weather-fog',
        text: '',
        colors:['#36D1DC', '#5B86E5']
    },
    Smoke : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#0b486b', '#f56217']
    },
    Haze : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#bdc3c7', '#2c3e50']
    },
    Dust : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#4b79a1', '#2c3e50']
    },
    Fog : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#e0eafc', '#cfdef3']
    },
    Sand : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#4b79a1', '#dbd65c']
    },
    Ash : {
        iconName: 'weather-fog',
        text: '',
        colors: ['#525252', '#dc2430']
    },
    Squall : {
        iconName: 'weather-hurricane',
        text: '',
        colors: ['#304352', '#d7d2cc']
    },
    Tornado : {
        iconName: 'weather-hurricane',
        text: '',
        colors: ['#0f0c29','#302b63','#24243e']
    }
}

const Weather = ({temp, condition, change}) => {
    return (
        <LinearGradient colors={weatherOptions[condition].colors} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons color={"white"} size={86} name={weatherOptions[condition].iconName}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title='비 + 번개' color={"gray"} onPress={()=>change("Thunderstorm")}/>
                <Button title='이슬비' color={"lightblue"} onPress={()=>change("Drizzle")}/>
                <Button title='비' color={"darkblue"} onPress={()=>change("Rain")}/>
                <Button title='눈' color={"cadetblue"} onPress={()=>change("Snow")}/>
                <Button title='맑음' color={"skyblue"} onPress={()=>change("Clear")}/>
                <Button title='돌풍' color={"royalblue"} onPress={()=>change("Squall")}/>
                <Button title='폭풍' color={"steelblue"} onPress={()=>change("Tornado")}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title='안개' color={"darkcyan"} onPress={()=>change("Mist")}/>
                <Button title='스모그' color={"dimgray"} onPress={()=>change("Smoke")}/>
                <Button title='안개2' color={"darkslategrey"} onPress={()=>change("Haze")}/>
                <Button title='먼지' color={"gainsboro"} onPress={()=>change("Dust")}/>
                <Button title='안개3' color={"lightsteelblue"} onPress={()=>change("Fog")}/>
                <Button title='모래' color={"navajowhite"} onPress={()=>change("Sand")}/>
                <Button title='화산재' color={"orangered"} onPress={()=>change("Ash")}/>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp :{
        fontSize: 42,
        color: "#fff"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10
    },
    buttonStyle: {
        color: '#ff0000'
    }
})

export default Weather
