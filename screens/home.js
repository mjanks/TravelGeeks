import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { globalStyles } from '../styles/global';
import TripList from './TripList';

export default function HomeScreen(props) {
  const { navigation } = props; // this is necessary to be able to use navigation below

  // const [character, setCharacter] = useState([
  //   { name: 'Luke Skywalker', home: 'Tatooine', species: 'human', key: 1 },
  //   { name: 'Michael', home: 'Earth', species: 'human', key: 2 },
  //   { name: 'Taylor', home: 'Earth', species: 'human', key: 3 },
  //   { name: 'Chelsea', home: 'Mars', species: 'human', key: 4 },
  //   { name: 'Luke Skywalker', home: 'Tatooine', species: 'human', key: 5 },
  //   { name: 'Michael', home: 'Earth', species: 'human', key: 6 },
  //   { name: 'Taylor', home: 'Earth', species: 'human', key: 7 },
  //   { name: 'Chelsea', home: 'Mars', species: 'human', key: 8 }
  // ]);

  const [property, setProperty] = useState();

  useEffect(() => {
    fetch('https://michaeljanks.com/getJson.php', {
      headers: {
        'Cache-control': 'no-cache, no-store, must-revalidate', 
        'pragma': 'no-cache'
      }
    })
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setProperty(data);
      //console.log(data);
    })
  }, []);

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
        // Using 'popToTop' method to return to the top of the stack, 
        // which is the Home screen. This way we don't have to click back through 
        // the details screen to get there.
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={globalStyles.buttonText}>Login or create account</Text>
        </TouchableOpacity>
        <Text style={globalStyles.titleText}>Browse properties</Text>
        <TripList property={property} navigation={navigation}/>
      
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