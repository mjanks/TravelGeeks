import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

const Host = ({ navigation }) => {
  const [price, setPrice] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [numBeds, setNumBeds] = useState('');
  const [numBaths, setNumBaths] = useState('');

  const property = { price, streetAddress, city, state, zipcode, title, description, numBeds, numBaths };

  const pressHandler = () => {
    alert('Property has been added! Tap refresh button to view updated list.');
    //console.log(property);
    //https://michaeljanks.com/addProperty.php
    //https://boiling-eyrie-67120.herokuapp.com/createListing
    fetch('https://michaeljanks.com/addProperty.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property)
    }).then(() => {
      console.log('new property added');
      //console.log(JSON.stringify(property));
    })
    navigation.navigate('Home');
  }

	return (
	<ScrollView >
    <View style={globalStyles.container}>
      <Text>Welcome Host!</Text>
      <Text>Fill out the form to add a property!</Text>
      <Text>Price:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter price'
        keyboardType='numeric'
        onChangeText={(val) => setPrice(val) }
      />
      <Text>Street Address:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter street address'
        onChangeText={(val) => setStreetAddress(val) }
      />
      <Text>City:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter city'
        onChangeText={(val) => setCity(val) }
      />
      <Text>State:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter state'
        onChangeText={(val) => setState(val) }
      />
      <Text>Zipcode:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter zipcode'
        keyboardType='numeric'
        onChangeText={(val) => setZipcode(val) }
      />
      <Text>Title:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter title'
        onChangeText={(val) => setTitle(val) }
      />
      <Text>Description:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter description'
        onChangeText={(val) => setDescription(val) }
      />
      <Text>Number of beds:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter number of bedrooms'
        keyboardType='numeric'
        onChangeText={(val) => setNumBeds(val) }
      />
      <Text>Number of baths:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter number of bathrooms'
        keyboardType='numeric'
        onChangeText={(val) => setNumBaths(val) }
      />
    </View>

    <View style={globalStyles.buttonContainer}>
      <Button title='Tap to add property' color='#cc1111' onPress={pressHandler} />
    </View>

  </ScrollView>
	);
};
export default Host;