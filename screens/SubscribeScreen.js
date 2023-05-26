import * as React from "react";
import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isPressable, setIsPressable] = React.useState(false);

  const backgroundColor = isPressable
    ? { backgroundColor: "#3E524B" }
    : { backgroundColor: "#B6B6B7" };

  React.useEffect(() => {
    if (validateEmail(email)) {
      setIsPressable(true);
    } else {
      setIsPressable(false);
    }
  }, [email]);

  const createAlert = () => {
    Alert.alert("Thanks for subscribing, stay tuned!", "", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardDismissMode="on-drag"
    >
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/little-lemon-logo-grey.png")}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.text}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email"
          keyboardType="email-address"
        />
        <Pressable
          style={[styles.button, backgroundColor]}
          disabled={!isPressable}
          onPress={createAlert}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "contain",
    width: 130,
    height: 200,
    alignSelf: "center",
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    color: "#6C6D6C",
  },
  inputEmail: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 30,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default SubscribeScreen;
