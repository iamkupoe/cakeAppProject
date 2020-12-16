import React from 'react';
import {FlatList, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import CakeInfo from './CakeInfo';
import Rectangle from '../Rectangle';
import Rounded from '../Rounded';




export default function CakeGalleryScreen({navigation}) {
      const cake = [
          {
           name: "Rainbow Cake",
           price: "GHC80.00",
           ingredients:"24 oz cake flour, 24 oz granulated sugar, 1 tsp salt, 2 tsp baking powder and 1 tsp baking soda",
           photo: require("../../../assets/rainbow.jpg"),
          },

          {
            name: "Chocolate and Cream layer Cake",
            price: "GHC150.00",
            ingredients:"Cooking spray, 7.33 ounces whole-wheat flour pastry flour,3/4 cup unsweetened cocoa, 1 1/2 tsp baking powder",
            photo: require("../../../assets/chocolate.jpeg"),
          },

          {
            name: "Funfetti Cake",
            price: "GHC120.00",
            ingredients:"1 2/3 cups all purpose flour, 1 cup granulated sugar, 1/4 tsp baking soda, 1 tsp baking powder, 3/4 cup unsalted butter(room temperature)",
            photo: require("../../../assets/Funfetti.jpg"),
          },

          {
            name: "Hummingbird Cake",
            price: "GHC80.00",
            ingredients:"3 cups all purpose flour, 2 cups granulated sugar, 1 tsp ground cinnamon, 1 tsp baking soda, 1 tsp salt",
            photo: require("../../../assets/Hummingbird.jpg"),
          },

          {
            name: "Carrot Cake",
            price: "GHC100.00",
            ingredients:"2 cups granulated sugar, 1 1/2 cups vegetable oil, 4 fresh whole eggs, 2 cups pastry flour, 2 tsp baking soda",
            photo: require("../../../assets/carrot.jpeg"),
          },

          {
            name: "Birthday Cake",
            price: "GHC120.00",
            ingredients:"3 cups all purpose flour, 1 tablespoon baking powder, 1/2 teaspoon salt, 1 1/2 cups sugar",
            photo: require("../../../assets/birthday.jpg"),
          },

          {
            name: "Fruit Sangria Cake",
            price: "GHC150.00",
            ingredients:"6 large eggs, 1 cup (200g) granulate sugar, 1 tsp vanilla extract, 1 cup (125g) all purpose flour",
            photo: require("../../../assets/fruit.jpg"),
          },
      ]
    return (
        <View style={styles.container}>

     <View style={styles.titleContainer}>
        <Text style={styles.heading}>Recipes Available</Text>
     </View>

           <View style={styles.searchArea}>
             <TextInput style={styles.searchBar}placeholder="Search Cake"/>
             
           </View>

           <FlatList style={styles.list}
              data={cake}
              renderItem={({item})=> <CakeInfo {...item} />}
              keyExtractor={(name, price, ingredients) => name + price + ingredients}
              />

              <View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate("PaymentOptions")
              }} style={styles.opacity}>
                <Text style={styles.opacityText}>Next</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>
            
          <View>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("LandingPage")
            }}>
            <Text style={styles.one}>Previous</Text>
            </TouchableOpacity>
         
         </View>
    
            <View style={styles.indicators}>
              <Rounded/>
              <Rectangle/>
              <Rounded/>
            </View>

            <View>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("PaymentOptions")
            }}>
            <Text style={styles.two}>Skip</Text>
            </TouchableOpacity>
         
         </View>
      
        </View>

        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#edebf0",
      //paddingHorizontal: 10,
      marginHorizontal:10,
      //paddingTop: 30,
      paddingLeft: 20,
      backgroundColor: "#e6ebe6",
    },
  
    searchArea: {
      flex:0.25,
      flexDirection: "row",
     
    },
  
    searchBar: {
      fontSize: 12,
      paddingLeft: 10,
      width: "95%",
      height: 35,
      backgroundColor: "white",
      borderRadius: 12,
      textAlign:"left",
     
    },

    list:{
        flex:5
    },
   
    titleContainer:{
      
        marginHorizontal:13,
        paddingBottom:5
    },

    heading:{
        fontWeight:"bold",
        fontSize:15,
        textAlign:"left",
        fontStyle:"italic",
        color:"#9332a8"
    },
    
    opacity:{
        marginVertical:10,
        alignSelf:"center",
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#6275f0",
        height:50,
        width:150,
        borderRadius:40
      },
      opacityText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
      },
      bottomText:{
          flex:0.1,
          //marginVertical:10,
          flexDirection:"row",
          
      },
      one:{
          color:"gray"
      },

      two:{
        marginLeft:110,
        color:"gray"
    },
    indicators:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:70

    }
  });