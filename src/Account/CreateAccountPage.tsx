import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'

import AuthForm from './AuthForm';

const CreateAccountPage = ({navigation}) => {
  const saveFormAndNavigate = () => {
    // Save info
    navigation.navigate("CreateProfile")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your Account</Text>
      <AuthForm>
        <Text style={styles.dark_button} onPress={saveFormAndNavigate} >Sign Up</Text>
      </AuthForm>
      <Text>
        <Text style={styles.footer}>Already have an account?</Text>
        <Text style={styles.sign_in} onPress={() => navigation.navigate("SignIn")}>Sign In</Text>
      </Text>
    </View>
  )
}

export default CreateAccountPage;

const styles = StyleSheet.create({
  container: {margin: 10},
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 60,
    marginLeft: 10
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
