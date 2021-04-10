import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Card from '../shared/card';
import useFetch from '../shared/useFetch';
import { globalStyles} from '../styles/global';

const Home = ({ navigation }) => {
  const { data: properties, isPending, error } = useFetch('http://travel-geeks.com/getProperties.php');

  return (
    <View style={globalStyles.container}>
      <Image 
        style={globalStyles.homeImage}
        resizeMode='cover'
        source={require('../assets/beach.jpg')} 
      />
      <Text style={globalStyles.titleText}>Welcome to Travel-Geeks!</Text>

      <Text>Browse properties below:</Text>
      { error && <Text>{ error }</Text>}
      { isPending && <Text>Loading properties...</Text> }
      { properties && <FlatList 
          data={properties}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetails', item)}>
                  <Card>
                  {/* <Text>{ item.id }</Text> */}
                  <Text>Price: ${ item.price }</Text>
                  <Text>Address: { item.street }</Text>
                  <Text>Title: { item.title }</Text>
                  <Text>Text Summary: { item.textSummary }</Text>
                  <Text>Number of beds: { item.numBeds }</Text>
                  <Text>Number of baths: { item.numBaths }</Text>
                  <Text>City: { item.city }</Text>
                  <Text>State: { item.state }</Text>
                  <Text>Zipcode: { item.zipcode }</Text>
                  </Card>
              </TouchableOpacity>
          )}
      /> }

    </View>
  );
};

export default Home;