import React from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, ActivityIndicator
} from 'react-native';
import * as Progress from 'react-native-progress';

const API_KEY = "87c3f9d1c2e1e9cc770b9f479b4e2aea";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            progress: 0,
            indeterminate: true,
            weatherData: "",
        }
    }

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
                    isLoading: false,
                    weatherData: JSON.stringify(json),
                }, function (){});
            })
            .catch(error => {
                console.error(error);
            });
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Now Loading....{this.state.weatherData}</Text>
                    <Progress.Bar
                        style={styles.progress}
                        progress={this.state.progress}
                        indeterminate={this.state.indeterminate}
                    />
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <Text>{this.state.weatherData}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});


AppRegistry.registerComponent('RNProject', () => App);
