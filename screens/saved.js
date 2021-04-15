import React, { useState } from "react";
import { FlatList, Button, View, Text } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

const Saved = ({ navigation }) => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch('https://michaeljanks.com/getSaved.php', {
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
      console.log(data);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      }
    })
  }

  return (
    <View style={globalStyles.container}>
      <Text>Here are your saved properties</Text>
      <Button title='Tap to View Properties/Refresh List' onPress={getData}/>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.SavedId}
        renderItem={({ item }) => (
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
          </Card>
        )}
      /> 
    </View>
  );
};
export default Saved;