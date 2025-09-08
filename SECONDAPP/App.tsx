import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }: { navigation: any }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.NEWTEXT}>Welcome to your first proper React Nativie app</Text>
      <Text style={styles.NEWTEXT}>Enter your First name:</Text>
      <TextInput
        placeholder='First name'
        onChangeText={(text) => setFirstName(text)}
        autoCapitalize='words'
        autoComplete='given-name'
        value={firstName}
      />
      <Text style={styles.NEWTEXT}>Enter your Last name:</Text>
      <TextInput
        placeholder='Last name'
        onChangeText={(text) => setLastName(text)}
        autoCapitalize='characters'
        autoComplete='family-name'
        value={lastName}
      />
      <Text style={styles.NEWTEXT}> Enter Your Phone Number(Shawty)  </Text>
      <TextInput
        placeholder='Phone Number'
        keyboardType='numeric'
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <Button
        title="ADD USER"
        color="#00f8f8ff"
        onPress={() => {
          console.log(`First Name:${firstName}, Last Name: ${lastName}, Phone Number: ${phoneNumber}`);
          setFirstName('');
          setLastName('');
          setPhoneNumber('');
          navigation.navigate('Details',{
            NameSend: firstName,
            SurnameSend: lastName,
            PhoneNumberSend: phoneNumber,
          });
        }
          }
        
      />
      <StatusBar style="auto" />
    </View>
  );
}
function Details({ navigation, route }: { navigation: any, route: any }) {
  const NameGet = route.params.NameSend;
  const Surname = route.params.SurnameSend;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Name : {NameGet} Surname : {Surname} </Text>
    </View>
  );
}
  
function Skill(){
  return(
    <View>
      
    </View>
  );

  
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Skills" component={Skill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#02b7ffff' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NEWTEXT: {
    fontFamily: 'serif',
    fontSize: 20,
    color: '#000000ff',
  },
    WelcomeText: {
      padding: 10,
      fontSize: 15,
      color: '#000000ff',
      textAlign: 'center',
      fontWeight: 'bold',

  },
  InputFlex:{
flexDirection: 'row',
marginTop: 30,
  },
  
    

});



