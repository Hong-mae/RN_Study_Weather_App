import React from 'react';
import Loading from './Components/Loading'
import * as Location from 'expo-location'
import { Alert, View } from 'react-native';
import axios from 'axios';
import Weather from './Components/Weather';

const API_KEY = "87c3f9d1c2e1e9cc770b9f479b4e2aea";

export default class App extends React.Component{
  state = {
    isLoading: true,
  }

  getWeather = async (leti, long) => {
    const {
      data: {
        main : {temp},
        weather
      } 
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${leti}&lon=${long}&appid=${API_KEY}&units=metric`
    )

    this.setState({
      isLoading: false,
      // condition: weather[0].main,
      condition: 'Ash',
      temp
    });
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //API
      this.getWeather(latitude, longitude);
      ///
    } catch (e) {
      console.log(e);
      Alert.alert("Can`t Find You.", "So... Sad...");
    }
  }

  changeWeather = (tag) => {
    this.setState({
      condition: tag
    });
  }

  componentDidMount = () => {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      <>
        {isLoading ? (
          <Loading/>
        ) : (
          <Weather temp={Math.round(temp)} condition={condition} change={this.changeWeather}/>
        )}
      </>
    )
  }
}
