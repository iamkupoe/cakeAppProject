import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Rectangle from '../Rectangle';
import Rounded from '../Rounded';


export default function LandingPageScreen({navigation}) {
    return (
        <View style={styles.container}>
             
            <View style={styles.headContainer}>
               <Text style={styles.heading}>The Cake Headquarters</Text>
            </View>

            <View style={styles.imageContainer}>
           <Image source={require('../../../assets/logo.jpg')} style={styles.image}/>
           </View>

            <View style={styles.contentContainer}>
            <Text style={styles.content}>The Cake Haven is a one stop shop for all your cake needs.We serve you with best and delicious cakes. We also serve our cherished customers with a outstanding recipes. The next page gives you a gallery of our cakes.</Text>
         </View>

           <View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate("CakeGallery")
              }} style={styles.opacity}>
                <Text style={styles.opacityText}>Next</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>
              <View style={styles.indicators}>
               <Rectangle/>
               <Rounded/>
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
    container:{
        flex:1,
        justifyContent:"space-between",
        marginHorizontal:10,
        backgroundColor:"#edebf0"
    },
  
    searchArea: {
      flexDirection: "row",
     
    },
  
    searchBar: {
      flex: 1,
      fontSize: 12,
      paddingLeft: 10,
      width: "95%",
      height: 42,
      backgroundColor: "white",
      borderRadius: 15,
      textAlign:"left",
      marginBottom:5
    },
    headContainer:{
        flex:1,
        marginTop:20,
        marginHorizontal:10
    },

    heading:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"left",
        fontStyle:"italic",
        color:"#9332a8"

    },
    contentContainer:{
      flex:3,
      justifyContent:"space-between",
    },
    content:{
        fontSize:15,
        color:"gray",
        lineHeight:25,
        color:"black"
    },
    imageContainer:{
        flex:4,
       alignItems:"center",
       marginHorizontal:5,
       marginBottom:30
    },
    image:{
        width:200,
        height:200,
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
        marginVertical:10,
        flexDirection:"row",
        
    },
    two:{
        marginLeft:110,
        color:"gray"
    },
    indicators:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft:120
    }
})

