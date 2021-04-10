import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MainStackNavigator,
	SavedStackNavigator,
	TripStackNavigator,
	InboxStackNavigator,
	ProfileStackNavigator,
	HostStackNavigator,
} from "./stackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#aa0000",
			}}
		>
			<Tab.Screen
				name="Home"
				component={MainStackNavigator}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={SavedStackNavigator}
				options={{
					tabBarLabel: "Saved",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="heart" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Trip"
				component={TripStackNavigator}
				options={{
					tabBarLabel: "Trips",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="bag-personal"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Inbox"
				component={InboxStackNavigator}
				options={{
					tabBarLabel: "Inbox",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="message-text"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Host"
				component={HostStackNavigator}
				options={{
					tabBarLabel: "Host",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="billboard"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStackNavigator}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
