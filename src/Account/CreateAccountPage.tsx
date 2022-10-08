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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your Account</Text>
      <AuthForm>
      <Button
          title="Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </AuthForm>
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
  }
})
