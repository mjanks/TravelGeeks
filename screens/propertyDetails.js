import React from "react";
import { View, Text, Button, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const PropertyDetails = ({ route, navigation }) => {
  const { name, description, rating } = route.params;

  const pressHandler = () => {
    alert('Not yet implemented!');
    //navigation.goBack();
  }

  return (
    <View style={globalStyles.propDetails}>

      <Text>Property Details Screen</Text>
      <Card>
      {/* <Text>{ navigation.getParam('id') }</Text> */}
      <Text>{ name }</Text>
      <Text>{ description }</Text>
      <View style={globalStyles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} />
      </View>
      
      </Card>
      <View style={globalStyles.buttonContainer}>
        <Button title='Save this property!' color='#cc1111' onPress={pressHandler} />
      </View>

    </View>
  );
};

export default PropertyDetails;