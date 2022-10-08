import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'

import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';

const AuthForm = ({children}) => {
  const [email, onChangeEmail] = useState("Email");
  const [password, onChangePassword] = useState("Password");
  const [isSelected, setSelection] = useState(false);

  return (
    <View >
      <TextInput
        placeholder="email"
        onChangeText={onChangeEmail}
        value={email}
        style={styles.formInput}
      />
      <TextInput
        placeholder="Password"
        onChangeText={onChangePassword}
        value={password}
        style={styles.formInput}
      />
      <BouncyCheckbox
        isChecked = {isSelected}
        text="Remember me"
        onPress={() => setSelection(!isSelected)}
        style={styles.checkbox}
      />

      {children}

      <Text>or continue with</Text>
      {/* add icons and auth with social media */}
    </View>
  )
}

const styles = StyleSheet.create({
  formInput: {
    borderRadius: 5,
    padding: 20,
    color: 'grey',
    borderColor: 'black',
    fontSize: 15,
    backgroundColor: '#eeeeee',
    margin: 10
  },
  checkbox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50
  }
});

export default AuthForm;
