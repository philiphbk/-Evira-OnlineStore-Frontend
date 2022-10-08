import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/Account/LoginPage';
import CreateAccountPage from './src/Account/CreateAccountPage';
import SignInForm from './src/Account/SignInForm';

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync()
  setTimeout(SplashScreen.hideAsync, 1000)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LoginPage}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInForm}
        />
        <Stack.Screen
          name="SignUp"
          component={CreateAccountPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <View style={styles.container}>
<StatusBar style="auto" />
<LoginPage />
</View> */}
