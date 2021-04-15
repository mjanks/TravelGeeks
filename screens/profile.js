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

const profile = ({ route, navigation }) => {

	// const { UserId, Username, Password } = route.params;
	// const userData = { UserId, Username, Password };

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.titleBar}></View>
				<View
					style={{
						backgroundColor: "#f7cac8",
						borderRadius: 50,
						paddingTop: 10,
						paddingBottom: 10,
					}}
				>
					<View style={{ alignSelf: "center" }}>
						<View style={styles.profileImage}>
							<Image
								source={require("../assets/profile-pic.jpg")}
								style={styles.image}
								resizeMode="center"
							></Image>
						</View>
						<View style={styles.active}></View>
					</View>

					<View style={styles.infoContainer}>
						<Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
							Ian
						</Text>
						<Text style={[styles.text, { fontSize: 14 }]}>Malcolm</Text>
					</View>
				</View>
				<View style={styles.statsContainer}>
					<View style={styles.statsBox}>
						<Text style={[styles.text, { fontSize: 24 }]}>530</Text>
						<Text style={[styles.text, styles.subText]}>Reviews</Text>
					</View>
					<View
						style={[
							styles.statsBox,
							{
								borderColor: "#DFD8C8",
								borderLeftWidth: 1,
								borderRightWidth: 1,
							},
						]}
					>
						<Text style={[styles.text, { fontSize: 24 }]}>455</Text>
						<Text style={[styles.text, styles.subText]}>Times Hosted</Text>
					</View>
					<View style={styles.statsBox}>
						<Text style={[styles.text, { fontSize: 24 }]}>24</Text>
						<Text style={[styles.text, styles.subText]}>Repeat Rentals</Text>
					</View>
				</View>

				<View style={{ marginTop: 32, alignItems: "center" }}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media1.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media2.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media3.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media4.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media5.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
						<View style={styles.mediaImageContainer}>
							<Image
								source={require("../assets/media6.jpg")}
								style={styles.image}
								resizeMode="cover"
							></Image>
						</View>
					</ScrollView>
				</View>
				<Text style={[styles.subText, { textAlign: "center" }]}>
					Recent Reviews
				</Text>
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
		// fontFamily: "HelveticaNeue",
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
	dm: {
		backgroundColor: "#41444B",
		position: "absolute",
		top: 20,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	active: {
		backgroundColor: "#34FFB9",
		position: "absolute",
		bottom: 28,
		left: 10,
		padding: 4,
		height: 20,
		width: 20,
		borderRadius: 10,
	},
	add: {
		backgroundColor: "#41444B",
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	infoContainer: {
		alignSelf: "center",
		alignItems: "center",
		marginTop: 16,
	},
	statsContainer: {
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 32,
	},
	statsBox: {
		alignItems: "center",
		flex: 1,
	},
	mediaImageContainer: {
		width: 180,
		height: 200,
		borderRadius: 12,
		overflow: "hidden",
		marginHorizontal: 10,
		alignContent: "center",
	},
	mediaCount: {
		backgroundColor: "#41444B",
		position: "absolute",
		top: "50%",
		marginTop: -50,
		marginLeft: 30,
		width: 100,
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12,
		shadowColor: "rgba(0, 0, 0, 0.38)",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		shadowOpacity: 1,
	},
	recent: {
		marginLeft: 78,
		marginTop: 32,
		marginBottom: 6,
		fontSize: 10,
	},
	recentItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 16,
	},
	activityIndicator: {
		backgroundColor: "#CABFAB",
		padding: 4,
		height: 12,
		width: 12,
		borderRadius: 6,
		marginTop: 3,
		marginRight: 20,
	},
});

export default profile;
