import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Rectangle from '../Rectangle';
import Rounded from '../Rounded';

export default function PaymentOptionsScreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
               <Text style={styles.heading}>Make a choice</Text>
            </View>

            <View style={styles.contentContainer}>
            <Text style={styles.content}>We have variety of payment options to choose from. We make payment very convenient for you. Go ahead choose your preferred payment option and make payment.
            1. MTN - 0546835848
            2. AirtelTigo - 0267278431
            3. Vodafone - 0203348597
            4. Bitcoin (Call for the account)</Text>
         </View>

           <View style={styles.imageContainer}>
           <Image source={require('../../../assets/all.png')} style={styles.image}/>
           </View>

           <View>
              <TouchableOpacity style={styles.opacity}>
                <Text style={styles.opacityText}>Make Payment</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>

          <View>

          <TouchableOpacity onPress={()=>{
              navigation.navigate("CakeGallery")
          }}>
          <Text style={styles.one}>Previous</Text>
          </TouchableOpacity>
       
       </View>
            

            <View style={styles.indicator}>
             <Rounded/>
             <Rounded/>
             <Rectangle/>
            </View>
            
            
          </View>
   
 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#edebf0",
        //marginTop:25,
        marginHorizontal:10
    },
    headContainer:{
        flex:0.2,
        marginHorizontal:10
    },

    heading:{
        fontSize:20,
        fontWeight:"bold",
        fontStyle:"italic",
        color:"#9332a8"

    },
    contentContainer:{
        flex:1.5,
       marginHorizontal:10,
    },
    content:{
        fontSize:15,
        color:"gray",
        lineHeight:25,
        color:"black"
    },
    imageContainer:{
        flex:1.5,
       alignItems:"center",
       marginHorizontal:5
    },
    image:{
        width:150,
        height:150
    },
    opacity:{
      alignSelf:"center",
      alignItems:"center",
      paddingVertical:10,
      backgroundColor:"#6275f0",
      height:50,
      width:160,
      borderRadius:30
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
    one:{
        marginHorizontal:5,
        color:"gray"
    },
    indicator:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft:60
    

    }
})

