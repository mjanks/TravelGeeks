import * as React from 'react';
import { View, Text, FlatList, Button, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function TripList(props) {
    const property = props.property;
    const title = props.title;
    const { navigation } = props;
    // console.log(props);

    return ( 
        <View style={globalStyles.conatainer}>
            <Text style={globalStyles.titleText}>{ title }</Text>
            <FlatList 
            data={property}
            renderItem={({ item }) => (
                <View style={globalStyles.card}>
                <Text style={globalStyles.cardText}>{item.id}</Text>
                <Text style={globalStyles.cardText}>{item.name}</Text>
                <Text style={globalStyles.cardText}>{item.description}</Text>
                <View style={globalStyles.buttonContainer}>
                <Button 
                    title='Save trip'
                    onPress={() => navigation.navigate('SaveStack', { screen: 'Saved' })}   
                />
                </View>
                </View>
            )}
            />
        </View>
     );
}
 