import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import store from "./store";
import Login from './screens/Login.js'
import Register from './screens/Register.js'
import Home from './screens/Home.js'
import AddExpense from './screens/AddExpense.js'
import EditExpense from './screens/EditExpense.js'
import MyProfile from './screens/MyProfile.js'
import ExpenseReport from './screens/myProfile.js'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <View style={styles.container}>

          {/* LOGIN & REGISTER */}
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>

          {/* SUMMARY PAGE */}
          <Stack.Screen name="Home" component={Home}/>

          {/* EDIT EXPENSE */}
          <Stack.Screen name="AddExpense" component={AddExpense} />
          <Stack.Screen name="EditExpense" component={EditExpense} />

          {/* PROFILE & ANALYTICS EXPENSE */}
          <Stack.Screen name="MyProfile" component={MyProfile}/>
          <Stack.Screen name="ExpenseReport" component={ExpenseReport}/>

        <StatusBar style="auto" />
      </View>

    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
