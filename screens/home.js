import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Card from '../shared/card';
import useFetch from '../shared/useFetch';
import { globalStyles} from '../styles/global';

const Home = ({ navigation }) => {
  const { data: properties, isPending, error } = useFetch('https://michaeljanks.com/getJson.php');

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
                  <Text>{ item.name }</Text>
                  <Text>{ item.description }</Text>
                  <Text>Rating: { item.rating }</Text>
                  </Card>
              </TouchableOpacity>
          )}
      /> }

    </View>
  );
};

export default Home;