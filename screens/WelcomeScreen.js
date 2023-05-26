import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Suscribe")}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    resizeMode: "contain",
    width: 130,
    height: 200,
    alignSelf: "center",
    margin: 120,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal:20
  },
  button: {
    backgroundColor: '#3E524B',
    marginBottom: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    color: 'white'
  }
});

export default WelcomeScreen;
