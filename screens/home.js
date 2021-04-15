import React, { useState } from "react";
import { Button, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Card from '../shared/card';
import { globalStyles} from '../styles/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  // const [username, setUsername] = useState('NOT LOGGED IN!');
  // const [password, setPassword] = useState('NOT LOGGED IN!');
  // const [userData, setUserData] = useState('');
  // const login = { username, password };
  // const { data: properties, isPending, error } = useFetch('https://michaeljanks.com/getJson.php');

  const getData = () => {
    //https://michaeljanks.com/getJson.php
    //https://boiling-eyrie-67120.herokuapp.com/properties
    fetch('https://michaeljanks.com/getJson.php', {
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
      //console.log(data);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      }
    })
  }

//   const processLogin = () => {
//     //const id = 1;
//     fetch('https://michaeljanks.com/processLogin.php', {
//         method: 'POST',
//         headers: {
//         "Content-Type": "application/json" ,
//         'Cache-control': 'no-cache, no-store, must-revalidate', 
//         'pragma': 'no-cache'
//         },
//         body: JSON.stringify(login)
//     })
//     .then(res => {
//         if(!res.ok) {
//         throw Error('ERROR: Could not fetch data!');
//         }
//         return res.json();
//     })
//     .then(userData => {
//         setUserData(userData);
//         if(login.username == userData[0].Username && login.password == userData[0].Password) {
//           navigation.navigate('Profile', userData);
//         } 
//     })
//     .catch(err => {
//         if (err.name === 'AbortError') {
//         console.log('fetch aborted');
//         }
//     })
// }

  return (
    <View style={globalStyles.container}>
      <Image 
        style={globalStyles.homeImage}
        resizeMode='cover'
        source={require('../assets/beach.jpg')} 
      />
      <Text style={globalStyles.titleText}>Welcome to Travel-Geeks!</Text>
      {/* <Text>Fill out the form to login</Text>
      <Text>Username: { username }</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter username'
        onChangeText={(val) => setUsername(val) }
      />
      <Text>Password: { password }</Text>
      <TextInput 
        style={globalStyles.input}
        placeholder='Enter password'
        onChangeText={(val) => setPassword(val) }
      /> */}
    
      {/* <View style={globalStyles.buttonContainer}>
        <Button title='Login' color='#cc1111' onPress={processLogin} />
      </View> */}

      <Text>Browse properties below:</Text>
      <Button title='Tap to View Properties/Refresh List' onPress={getData}/>
      <FlatList
          data={data}
          keyExtractor={(item, index) => item.PropertyId}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetails', item)}>
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
              </TouchableOpacity>
          )}
      /> 
    </View>
  );
};
export default Home;