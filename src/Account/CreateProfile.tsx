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
import DropDownPicker from 'react-native-dropdown-picker';

const CreateProfile = ({navigation}) => {
  const [name, onChangeName] = useState("Name");
  const [nickname, onChangeNickname] = useState("NickName");
  const [dob, onChangeDob] = useState("Date Of Birth");
  const [email, onChangeEmail] = useState("Email");
  const [phone, onChangePhoneNumber] = useState("Phone Number");
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Non-binary', value: 'nonbinary'},
    {label: 'Prefer to not say', value: 'n/a'}
  ]);


  return(
    <View>
      <Text style={styles.header}> Fill Your Profile</Text>
      <>
        <TextInput
          placeholder="Full Name"
          onChangeText={onChangeName}
          value={name}
          style={styles.formInput}
        />
        <TextInput
          placeholder="NickName"
          onChangeText={onChangeNickname}
          value={nickname}
          style={styles.formInput}
        />
        <TextInput
          placeholder="Date Of Birth"
          onChangeText={onChangeName}
          value={dob}
          style={styles.formInput}
        />
        <TextInput
          placeholder="email"
          onChangeText={onChangeEmail}
          value={email}
          style={styles.formInput}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={onChangePhoneNumber}
          value={phone}
          style={styles.formInput}
        />
        <DropDownPicker
          open={open}
          value={gender}
          items={items}
          style={styles.formInput}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItems}
        />
        <Text style={styles.dark_button} onPress={navigation.navigate("Dashboard")}>Save</Text>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {margin: 10},
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 60,
    marginLeft: 10
  },
  formInput: {
    borderRadius: 5,
    padding: 20,
    color: 'grey',
    borderColor: '#eeeeee',
    fontSize: 15,
    backgroundColor: '#eeeeee',
    margin: 10
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
    marginTop: 30,
    backgroundColor: "black",
    color: "white",
    overflow: 'hidden',
    textAlign: 'center'
  }
})

export default CreateProfile;
