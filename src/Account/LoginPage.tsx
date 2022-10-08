import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'

import BouncyCheckbox from "react-native-bouncy-checkbox";

const LoginPage = ({navigation}) => {
  return (
    <View>
      <Image source={{uri: "assets/sign-in-icon.png"}}/>
      <Text style={styles.header}>Let's you in</Text>
      <Text style={styles.button}>Continue with Facebook</Text>
      <Text style={styles.button}>Continue with Google</Text>
      <Text style={styles.button}>Continue with Apple</Text>
      <Text>or</Text>
      <Button
        title="Sign in with password"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Text>Don't have an account?</Text>
      <Text onPress={() => navigation.navigate("SignUp")}>Sign up</Text>
    </View>
  )
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {margin: 10},
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 60,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#dddddd",
    padding: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
