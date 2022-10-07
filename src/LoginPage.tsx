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

const LoginPage = () => {
  const [email, onChangeEmail] = useState("Email");
  const [password, onChangePassword] = useState("Password");
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <Text>Create your account</Text>
      <TextInput
        placeholder="email"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={onChangePassword}
        value={password}
      />
      <BouncyCheckbox
        isChecked = {isSelected}
        onPress={() => setSelection(!isSelected)}
      />
      {/* Should redirect to sign up page */}
      <Button
        title="Sign Up"
        // onPress={() => }
      />

      <Text>or continue with</Text>
      {/* add icons and auth with social media */}
    </View>
  )
}

export default LoginPage;
