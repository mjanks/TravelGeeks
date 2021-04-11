import React, { useState } from "react";
import { Button, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles} from '../styles/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  //const { data: properties, isPending, error } = useFetch('https://michaeljanks.com/getJson.php');

  const getData = () => {
    fetch('https://michaeljanks.com/getJson.php', {
      headers: {
        'Cache-control': 'no-cache, no-store, must-revalidate', 
        'pragma': 'no-cache'
      },
    })
    .then(res => {
      if(!res.ok) {
        throw Error('ERROR: Could not fetch data!');
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      //console.log(data);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      }
    })
  }

  return (
    <View style={globalStyles.container}>
      <Image 
        style={globalStyles.homeImage}
        resizeMode='cover'
        source={require('../assets/beach.jpg')} 
      />
      <Text style={globalStyles.titleText}>Welcome to Travel-Geeks!</Text>

      <Text>Browse properties below:</Text>
      <Button title='Tap to View Properties/Refresh List' onPress={getData}/>
      <FlatList
          data={data}
          keyExtractor={(item, index) => item.PropertyId}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetails', item)}>
                  <Card>
                  <Text>Price: ${ item.Price }</Text>
                  <Text>Address: { item.StreetAddress }</Text>
                  <Text>City: { item.City }</Text>
                  <Text>State: { item.State }</Text>
                  <Text>Zipcode: { item.Zipcode }</Text>
                  <Text>Title: { item.Title }</Text>
                  <Text>Description: { item.Description }</Text>
                  <Text>Number of beds: { item.NumBeds }</Text>
                  <Text>Number of baths: { item.NumBaths }</Text>
                  <Text>Rating: { item.Rating }</Text>
                  </Card>
              </TouchableOpacity>
          )}
      /> 
    </View>
  );
};
export default Home;