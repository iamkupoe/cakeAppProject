import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


export default function CakeInfo({name, price, ingredients, photo}) {
    return (
        
        <View style={styles.container}>
        <Image style={styles.image} source={photo}/>

        <View style={styles.cakeInfo}>
          <Text style={styles.cakeName}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.recipe}>{ingredients}</Text>
        </View>

        
       </View>
        
    )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     flexDirection:"row",
     alignItems:"center",
     //marginBottom:5,
     marginTop:10,
     height:100,
     marginLeft:0

   },

   image:{
     width:130,
     height:100,
     borderRadius:20,
   
   },
   cakeName: {
    color: "#4e15ab",
    fontSize: 15,
    fontWeight: "bold", 
  },

  price: {
    color: "red",
    fontSize: 13,
    fontWeight:"bold",
    flexDirection:"row",
  },

  cakeInfo: {
    justifyContent: "center",
    height: 10,
    width: 180,
    paddingLeft: 15,  
  },

  recipe:{
      color:"blue",
      fontSize:12
  },

});