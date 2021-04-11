import React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Trips = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.titleBar}></View>

				<View style={{ marginTop: 32}}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/SampleProperty1.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View
							style={{
								marginTop: 17,
								alignItems: "center",
								width: 180,
								textAlign: "center",
							}}
						>
							<Text style={styles.propertyTitle}>Park Museum</Text>
							<Text>Reserved from:</Text>
							<Text> 11/20/1990 to 12/02/2021</Text>
							<Text></Text>
							<Text>
								A vacation on a lush isolated island. Just watch out for the
								neighbors, they get a little hungry.
							</Text>
						</View>
					</ScrollView>
				</View>

				<View style={{ marginTop: 32}}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/SampleProperty2.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View
							style={{
								marginTop: 17,
								alignItems: "center",
								width: 180,
								textAlign: "center",
							}}
						>
							<Text style={styles.propertyTitle}>A Cave of Bats</Text>
							<Text>Reserved from:</Text>
							<Text> 03/30/1939 to 12/02/2021</Text>
							<Text></Text>
							<Text>
								A dark, dank cave filled to the brim with technology. Perfect
								for those edgy billionaires with a vigilante complex.
							</Text>
						</View>
					</ScrollView>
				</View>

				<View style={{ marginTop: 32}}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/SampleProperty3.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View
							style={{
								marginTop: 17,
								alignItems: "center",
								width: 180,
								textAlign: "center",
							}}
						>
							<Text style={styles.propertyTitle}>The Shire</Text>
							<Text>Reserved from:</Text>
							<Text> 09/21/1937 to 12/02/2021</Text>
							<Text></Text>
							<Text>
								A beautifully small house for rather small people. Enjoy the
								peace and quiet as you ponder what's precious.
							</Text>
						</View>
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fbdddd",
	},
	text: {
		color: "#52575D",
		textAlign: "center",
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined,
	},
	titleBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 24,
		marginHorizontal: 16,
	},
	subText: {
		fontSize: 12,
		color: "#AEB5BC",
		textTransform: "uppercase",
		fontWeight: "500",
		marginHorizontal: 10,
	},
	profileImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		overflow: "hidden",
	},
	header: {
		alignSelf: "center",
		alignItems: "center",
		marginTop: 16,
	},
	mediaImageContainer: {
		width: 180,
		height: 200,
		borderRadius: 12,
		margin: 10,
		overflow: "hidden",
		marginHorizontal: 10,
		alignSelf: "center",
	},
	textContainer: {
		marginTop: 32,
		alignItems: "flex-start",
	},
	propertyTitle: {
		color: "#52575D",
		textAlign: "center",
		fontSize: 24,
	},
	propertyDescription: {
		color: "#52575D",
		textAlign: "center",
		fontSize: 16,
	},
});

export default Trips;
