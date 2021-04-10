import React, { useState } from "react";
import { RefreshControl, Button, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Card from '../shared/card';
import useFetch from '../shared/useFetch';
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
      {/* { error && <Text>{ error }</Text>}
      { isPending && <Text>Loading properties...</Text> } */}
      <FlatList
          data={data}
          // keyExtractor={(item, index) => item.propertyID}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetails', item)}>
                  <Card>
                  {/* <Text>Price: ${ item.price }</Text>
                  <Text>Address: { item.street }</Text>
                  <Text>Title: { item.title }</Text>
                  <Text>Text Summary: { item.textSummary }</Text>
                  <Text>Number of beds: { item.numBeds }</Text>
                  <Text>Number of baths: { item.numBaths }</Text>
                  <Text>City: { item.city }</Text>
                  <Text>State: { item.state }</Text>
                  <Text>Zipcode: { item.zipcode }</Text> */}
                  <Text>Name: { item.name } </Text>
                  <Text>Description: { item.description } </Text>
                  <Text>Rating: { item.rating } </Text>
                  </Card>
              </TouchableOpacity>
          )}
      /> 

    </View>
  );
};

export default Home;