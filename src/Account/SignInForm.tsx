import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AuthForm from './AuthForm';

const SignInForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login to your Account</Text>
      <AuthForm>
        <Text style={styles.dark_button} onPress={() => navigation.navigate("Dashboard")}>Sign In</Text>
      </AuthForm>
      <Text>
        <Text style={styles.footer}>Dont't have an account?</Text>
        <Text style={styles.sign_in} onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
      </Text>
    </View>
  )
}

export default SignInForm;

const styles = StyleSheet.create({
  container: {margin: 10},
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 60,
  },
  dark_button: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dddddd",
    padding: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: "black",
    color: "white",
    overflow: 'hidden',
    textAlign: 'center'
  },
  footer: {
    textAlign: 'center',
    color: "#aaaaaa"
  },
  sign_in: {
    fontWeight: "bold"
  }
})
