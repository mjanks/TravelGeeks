import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

const WriteReview = ({ route, navigation }) => {
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [timePosted, setTimePosted] = useState('');
  const [reviewerId, setReviewerId] = useState('');
  const [propId, setPropetyId] = useState('');

  const review = { rating, title, text, timePosted, reviewerId, propId };
  const { PropertyId } = route.params;

  const pressHandler = () => {
    setPropetyId({PropertyId});
    alert('Not yet implemented!');
    // alert('Review has been added! Tap refresh button to view updated list.');

    // fetch('https://michaeljanks.com/addReview.php', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(property)
    // }).then(() => {
    //   console.log('new review added');
    //   console.log(JSON.stringify(property));
    // })
    navigation.navigate('Home');
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
      
      {/* <Text>PropertyId: {PropertyId}</Text> */}
      
      <View style={globalStyles.buttonContainer}>
        <Button title='Tap to submit review' color='#cc1111' onPress={pressHandler} />
      </View>


    </ScrollView>
	);
};
export default WriteReview;