import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import PropertyDetails from "../screens/propertyDetails";
import Saved from "../screens/saved";
import Trips from "../screens/trips";
import Inbox from "../screens/inbox";
import Profile from "../screens/profile";
import Host from "../screens/host";
import WriteReview from "../screens/writeReview";

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#aa0000",
	},
	headerTintColor: "white",
	headerBackTitle: "Back",
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator 
			screenOptions={screenOptionStyle} 
			headerMode="none"
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="PropertyDetails" component={PropertyDetails} />
			<Stack.Screen name="WriteReview" component={WriteReview} />
		</Stack.Navigator>
	);
};

const SavedStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Saved" component={Saved} />
		</Stack.Navigator>
	);
};

const TripStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Trips" component={Trips} />
		</Stack.Navigator>
	);
};

const InboxStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Inbox" component={Inbox} />
		</Stack.Navigator>
	);
};

const ProfileStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

const HostStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Host" component={Host} />
		</Stack.Navigator>
	);
};

export {
	MainStackNavigator,
	SavedStackNavigator,
	TripStackNavigator,
	InboxStackNavigator,
	ProfileStackNavigator,
	HostStackNavigator,
};
