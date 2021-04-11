import React from "react";
import { View, Text, Button, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const PropertyDetails = ({ route, navigation }) => {
  const { Price, StreetAddress, City, State, Zipcode, Title, Description, NumBeds, NumBaths, Rating } = route.params;
  const property = { Price, StreetAddress, City, State, Zipcode, Title, Description, NumBeds, NumBaths, Rating };

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
      <Text>Price: ${ Price }</Text>
      <Text>Address: { StreetAddress }</Text>
      <Text>City: { City }</Text>
      <Text>State: { State }</Text>
      <Text>Zipcode: { Zipcode }</Text>
      <Text>Title: { Title }</Text>
      <Text>Description: { Description }</Text>
      <Text>Number of beds: { NumBeds }</Text>
      <Text>Number of baths: { NumBaths }</Text>
      <View style={globalStyles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[Rating]} />
      </View>
      
      </Card>
      <View style={globalStyles.buttonContainer}>
        <Button title='Save this property!' color='#cc1111' onPress={pressHandler} />
      </View>

    </View>
  );
};

export default PropertyDetails;