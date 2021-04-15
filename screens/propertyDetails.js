import React, { useState } from "react";
import { FlatList, View, Text, Button, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const PropertyDetails = ({ route, navigation }) => {
  const { PropertyId, Price, StreetAddress, City, State, Zipcode, Title, Description, NumBeds, NumBaths, } = route.params;
  const property = { PropertyId, Price, StreetAddress, City, State, Zipcode, Title, Description, NumBeds, NumBaths };
  const [data, setData] = useState(null);

  const pressHandlerSaved = () => {
    alert('Property has been saved! Tap refresh button to view updated list.');
    // console.log(property);

    fetch('https://michaeljanks.com/addSaved.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property)
    }).then(() => {
      console.log('property saved');
      //console.log(JSON.stringify(property));
    })
    navigation.navigate('Saved');
  }

  const pressHandlerBook = () => {
    alert('Not yet implemented!');
    // console.log(property);

    fetch('https://michaeljanks.com/addTrip.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property)
    }).then(() => {
      console.log('property booked');
      //console.log(JSON.stringify(property));
    })
    navigation.navigate('Home');
  }

  const getData = () => {
    fetch('https://michaeljanks.com/getReviews.php', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" ,
        'Cache-control': 'no-cache, no-store, must-revalidate', 
        'pragma': 'no-cache'
      },
      body: JSON.stringify(property)
    })
    .then(res => {
      if(!res.ok) {
        throw Error('ERROR: Could not fetch data!');
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      //console.log(JSON.stringify(data));
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      }
    })
  }

  return (
    <View style={globalStyles.propDetails}>

      <Text>Property Details Screen</Text>
      <Card>
      {/* <Text>{ navigation.getParam('id') }</Text> */}
      <Text>Price: ${ Price }</Text>
      <Text>Address: { StreetAddress }</Text>
      <Text>City: { City }</Text>
      <Text>State: { State }</Text>
      <Text>Zipcode: { Zipcode }</Text>
      <Text>Title: { Title }</Text>
      <Text>Description: { Description }</Text>
      <Text>Number of beds: { NumBeds }</Text>
      <Text>Number of baths: { NumBaths }</Text>
      
      </Card>

      <View style={globalStyles.buttonContainer}>
        <Button title='Book this property!' color='#cc1111' onPress={pressHandlerBook} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button title='Save this property!' color='#cc1111' onPress={pressHandlerSaved} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button title='Write a review' color='#cc1111' onPress={() => navigation.navigate('WriteReview', property)} />
      </View>

      <Button title='Tap to see reviews/refresh list' onPress={getData}/>
      <FlatList
          data={data}
          keyExtractor={(item, index) => item.ReviewId}
          renderItem={({ item }) => (
              <Card>
              <Text>Title: { item.Title }</Text>
              <Text>Review: { item.Text }</Text>
              <Text>Time Posted: { item.TimePosted }</Text>
              <View style={globalStyles.rating}>
                <Text>Rating:</Text>
                <Image source={images.ratings[item.Rating]} />
              </View>
              </Card>
          )}
      /> 

    </View>
  );
};

export default PropertyDetails;