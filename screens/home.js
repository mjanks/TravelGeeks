import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { globalStyles } from '../styles/global';
import useFetch from '../useFetch';
import TripList from './TripList';

export default function HomeScreen(props) {
  const { navigation } = props; // this is necessary to be able to use navigation below
  const { data: property, isPending, error } = useFetch('https://michaeljanks.com/getJson.php');

  return (
    <View style={globalStyles.conatainer}>
      <Image 
        style={globalStyles.homeImage}
        resizeMode='cover'
        source={require('../assets/beach.jpg')} 
      />
      <Text style={globalStyles.titleText}>Welcome to Travel-Geeks!</Text>
      <TouchableOpacity
          style={globalStyles.buttonContainer}
          onPress={() => navigation.navigate('Login')}
        >
        <Text style={globalStyles.buttonText}>Login or create account</Text>
      </TouchableOpacity>
      <Text style={globalStyles.titleText}>Browse properties</Text>
      { error && <Text style={globalStyles.titleText}>{ error }</Text>}
      { isPending && <Text style={globalStyles.titleText}>Loading properties...</Text> }
      { property && <TripList property={property} navigation={navigation}/> }
      
      {/* <TouchableOpacity
        style={globalStyles.buttonContainer}
        
        // You can pass parameters to a route by putting the params in an object as 
        // the second arguement using navigation.navigate. 
        onPress={() => navigation.navigate('ProfStack')}
      >
        <Text style={globalStyles.buttonText}>Go to Profile</Text>
      </TouchableOpacity> */}

    </View>
  );
}