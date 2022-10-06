import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
      <BouncyCheckbox
        isChecked = {isSelected}
        onPress={() => setSelection(!isSelected)}
      />
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
      {/* Add button */}
    </View>
  )
}

export default LoginPage;
