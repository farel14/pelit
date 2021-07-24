import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPasswordl] = useState("");

  function handleLoginButton() {
    if (!email && !password)
      Alert.alert("Please input your email and password");
    else if (!email) Alert.alert("Please input your email");
    else if (!password) Alert.alert("Please input your password");
    else {
      console.log(email, password);
      // fetch("http://192.168.84.2:3000/login", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .post("http://192.168.84.2:3000/login", {
      //     data: { email, password },
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // fetch("https://sugoku.herokuapp.com/board?difficulty=easy")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }

  function handleRegisterButton() {
    navigation.navigate("Register");
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
        }}
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(e) => setEmail(e)}
      ></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(e) => setPasswordl(e)}
      ></TextInput>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={handleRegisterButton}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04009A",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 130,
    height: 130,
  },
  text: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 17,
    width: 300,
    height: 40,
    backgroundColor: "#E8F0F2",
    color: "black",
    borderColor: "#053742",
    textAlign: "left",
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonLogin: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#77ACF1",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonRegister: {
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#3C8DAD",
  },
});
