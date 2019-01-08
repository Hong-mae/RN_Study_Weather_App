import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, ActivityIndicator,
    StatusBar
} from 'react-native';
import * as Progress from 'react-native-progress';
import Weather from './Weather';

const API_KEY = "87c3f9d1c2e1e9cc770b9f479b4e2aea";

export default class App extends Component {
    state = {
        isLoading: false,
        progress: 0,
        progressColor: "#007aff",
        indeterminate: true,
        error: null,
        temperature: null,
        name: null,
    };

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this._getWeather(position.coords);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    _getWeather({latitude, longitude}) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .then(response => response.json()) // 응답값을 json으로 변환
            .then(json => {
                console.log(json);
                this.setState({
                    isLoading: true,
                    temperature: json.main.temp,
                    name: json.weather[0].main,
                })
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    isLoading: false,
                    error: "Something Wrong!!",
                    progress: 1,
                    progressColor: "#f00",
                })
            });
    }

    render() {
        const { isLoading, error, temperature, name } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                {isLoading ?
                    (
                        <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} />
                    ) : (
                    <View style={styles.isLoading}>

                        <Text style={styles.item}>위치 정보를 읽는 중...</Text>
                        {error ? <Text style={styles.error}>{error}</Text> : null}
                        <Progress.Bar
                            style={styles.progress}
                            progress={this.state.progress}
                            indeterminate={this.state.indeterminate}
                            color={this.state.progressColor}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    isLoading: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    progress: {
        margin: 10,
    },
    error:{
        color: "red",
    }
});


AppRegistry.registerComponent('RNProject', () => App);
