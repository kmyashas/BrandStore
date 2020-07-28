import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ItemComponent = ({title, imageSource, navigation}) => {
    


    return (
        <View style={styles.component}>

        <View style={styles.touchcontainer}>
            <TouchableOpacity style={styles.touchables}
                onPress={()=> navigation.navigate('title', {
                    screen: 'Shirts'
                })}
             >
               
                    <Text style={styles.textStyles}>{title}</Text>
                

                
                    <Image source={imageSource} style={styles.imageStyle} />
                
              
                

            </TouchableOpacity>

         </View>
            
        </View>
    )
}
 
export default ItemComponent

const styles = StyleSheet.create({
  component: {
      flex:1,
      //justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '15%'
  },
  touchables:{
      width: '90%',
      height: '90%',
      borderRadius: 50,
      backfaceVisibility: 'hidden'
      
  },
  imageStyle: {
      flex:1,
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 50
      
  },
  textStyles: {
      fontSize: 30,
      alignSelf: 'center',
      color: '#fff'
  },
  touchcontainer:{
      flex:1,
      width: '100%',
      height: '100%',
      margin: '5%'
  }
})
