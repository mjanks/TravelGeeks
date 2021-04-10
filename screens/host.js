import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

const Host = ({ navigation }) => {
  // const [price, setPrice] = useState('');
  // const [street, setStreet] = useState('');
  // const [title, setTitle] = useState('');
  // const [textSummary, setTextSummary] = useState('');
  // const [numBeds, setNumBeds] = useState('');
  // const [numBaths, setNumBaths] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const property = { price, street, title, textSummary, numBeds, numBaths, city, state, zipcode };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const property = { name, description, rating };

  const pressHandler = () => {
    alert('Property has been added! Tap refresh button to view updated list.');
    // console.log(property);

    fetch('https://michaeljanks.com/addProperty.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property)
    }).then(() => {
      console.log('new property added');
      console.log(JSON.stringify(property));
    })
    navigation.navigate('Home');
  }

	return (
	<ScrollView >
      <Text>Welcome Host!</Text>
      <Text>Fill out the form to add a property!</Text>
      <Text>Name:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter name'
        onChangeText={(val) => setName(val) }
      />
      <Text>Description:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter description'
        onChangeText={(val) => setDescription(val) }
      />
      <Text>Rating:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter rating 1-5'
        keyboardType='numeric'
        onChangeText={(val) => setRating(val) }
      />


      {/* <Text>Price: {price} </Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter price'
        keyboardType='numeric'
        onChangeText={(val) => setPrice(val) }
      />
      <Text>Street: {street}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter address'
        onChangeText={(val) => setStreet(val) }
      />
      <Text>Title: {title}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter title'
        onChangeText={(val) => setTitle(val) }
      />
      <Text>Text Summary: {textSummary}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter summary'
        onChangeText={(val) => setTextSummary(val) }
      />
      <Text>Number of beds: {numBeds}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter number of bedrooms'
        keyboardType='numeric'
        onChangeText={(val) => setNumBeds(val) }
      />
      <Text>Number of baths: {numBaths}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter number of bathrooms'
        keyboardType='numeric'
        onChangeText={(val) => setNumBaths(val) }
      />
      <Text>City: {city}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter city'
        onChangeText={(val) => setCity(val) }
      />
      <Text>State: {state}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter state'
        onChangeText={(val) => setState(val) }
      />
      <Text>Zipcode: {zipcode}</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter zipcode'
        keyboardType='numeric'
        onChangeText={(val) => setZipcode(val) }
      />

      <Text>Property Price: {property.price}</Text>
      <Text>Property Street: {property.street}</Text>
      <Text>Property Title: {property.tite}</Text>
      <Text>Property textSummary: {property.textSummary}</Text>
      <Text>Property numBeds: {property.numBeds}</Text>
      <Text>Property numBaths: {property.numBaths}</Text>
      <Text>Property City: {property.city}</Text>
      <Text>Property State: {property.state}</Text>
      <Text>Property zipcode: {property.zipcode}</Text> */}


      <View style={globalStyles.buttonContainer}>
        <Button title='Tap to add property' color='#cc1111' onPress={pressHandler} />
      </View>


    </ScrollView>
	);
};

export default Host;
