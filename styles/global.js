import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbdddd',
    },
    propDetails: {
        flex: 1, 
        padding: 20,
        marginTop: 55,
    },
    titleText: {
        fontSize: 27,
        color: 'red',
        fontWeight: 'bold',
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#aaa',
    },
    buttonContainer: {
        backgroundColor: '#110000',
        borderRadius: 2,
        padding: 5,
        margin: 10,
    },
    homeImage: {
        width: 420,
        height: 200,
        margin: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 3,
        margin: 5,
        width: 200,
    }

});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};