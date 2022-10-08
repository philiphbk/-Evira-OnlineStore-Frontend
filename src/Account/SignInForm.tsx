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
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </AuthForm>
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
  }
})
