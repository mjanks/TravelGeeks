import React from "react";
import { View, Text, Button, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const PropertyDetails = ({ route, navigation }) => {
  // const { name, description, rating } = route.params;
  // const property = { name, description, rating };

  const { price, street, title, textSummary, numBeds, numBaths, city, state, zipcode } = route.params;
  const property = { price, street, title, textSummary, numBeds, numBaths, city, state, zipcode };

  const pressHandler = () => {

    // fetch("https://michaeljanks.com/addProperty.php", {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(property)
    // }).then(() => {
    //   console.log('new property added');
    //   console.log(JSON.stringify(property));
    // })

    alert('Not yet implemented!');
    //navigation.goBack();
  }

  return (
    <View style={globalStyles.propDetails}>

      <Text>Property Details Screen</Text>
      <Card>
      {/* <Text>{ navigation.getParam('id') }</Text> */}
      <Text>Price: ${ price }</Text>
      <Text>Address: { street }</Text>
      <Text>Title: { title }</Text>
      <Text>Summary: { textSummary }</Text>
      <Text>Number of beds: { numBeds }</Text>
      <Text>Number of baths: { numBaths }</Text>
      <Text>City: { city }</Text>
      <Text>State: { state }</Text>
      <Text>Zipcode: { zipcode }</Text>
      {/* <View style={globalStyles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} />
      </View> */}
      
      </Card>
      <View style={globalStyles.buttonContainer}>
        <Button title='Save this property!' color='#cc1111' onPress={pressHandler} />
      </View>

    </View>
  );
};

export default PropertyDetails;