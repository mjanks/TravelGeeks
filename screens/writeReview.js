import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

const WriteReview = ({ route, navigation }) => {
  const { PropertyId } = route.params; // PropertyId passed in using the route prop on the above line
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [timePosted, setTimePosted] = useState('');
  const [reviewerId, setReviewerId] = useState('');
  const [propId, setPropertyId] = useState(PropertyId); // set the initial state of propId to the PropertyId 
  
  const review = { rating, title, text, timePosted, reviewerId, propId };
  
  const pressHandler = () => {
    alert('Review has been added! Tap refresh button to view updated list.');

    fetch('https://michaeljanks.com/addReview.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    }).then(() => {
      console.log('new review added');
      //console.log(JSON.stringify(review));
    })
    navigation.navigate('PropertyDetails');
  }

	return (
	<ScrollView style={globalStyles.propDetails}>
      <Text>Write a review of the property using the form below:</Text>
      <Text>Rating:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter rating 1-5'
        keyboardType='numeric'
        onChangeText={(val) => setRating(val) }
      />
      <Text>Title:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter title'
        onChangeText={(val) => setTitle(val) }
      />
      <Text>Review:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter text'
        onChangeText={(val) => setText(val) }
      />
      <Text>Date:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter date/time'
        onChangeText={(val) => setTimePosted(val) }
      />
      {/* <Text>Reviewer Id:</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter a reviewerId'
        onChangeText={(val) => setReviewerId(val) }
      /> */}
      
      <View style={globalStyles.buttonContainer}>
        <Button title='Tap to submit review' color='#cc1111' onPress={pressHandler} />
      </View>


    </ScrollView>
	);
};
export default WriteReview;