import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPageScreen from './src/components/screens/LandingPage';
import CakeGalleryScreen from './src/components/screens/CakeGallery';
import PaymentOptionsScreen from './src/components/screens/PaymentOptions';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="LandingPageScreen">
        <Stack.Screen 
        options={{
          headerTitle:"Welcome to Cake Haven",
          headerStyle:{
            backgroundColor:"#a8324c"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerRight:()=>{
            return(
              <FontAwesome name="birthday-cake" size={24} color="white" style={{marginRight:10}} />
            )
          },
          headerTitleStyle:{
            fontSize:20
          }
          
        }}
           name="LandingPage" component={LandingPageScreen}/>
        <Stack.Screen 
        options={{
          headerTitle:"Cake Haven Gallery",
          headerStyle:{
            backgroundColor:"#a8324c"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerRight:()=>{
            return(
             <Feather name="shopping-cart" size={20} color="white" style={{marginRight:10}} />
            )
          },
          headerTitleStyle:{
            fontSize:20
          }
          
        }}
          name="CakeGallery" component={CakeGalleryScreen}/>
        <Stack.Screen 
        options={{
          headerTitle:"Payment Options",
          headerStyle:{
            backgroundColor:"#a8324c"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerRight:()=>{
            return(
              <MaterialIcons name="payment" size={24} color="white" style={{marginRight:10}} />
            )
          },
          headerTitleStyle:{
            fontSize:20
          }
          
        }}
          name="PaymentOptions" component={PaymentOptionsScreen}/>
      </Stack.Navigator>
        
    </NavigationContainer>
  );
}

