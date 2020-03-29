import React , {useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image,  Text} from  'react-native';
import {MID_BLUE} from '../../styles/colors'
import * as Fonts from 'expo-font';


const SignInGoogle = (props:any) => {


    return (
      <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
 
            <Image 
            source={require('../../images/GoogleSignIn.png')} 
            style={styles.ImageIconStyle} 
            />
            <Text style={styles.TextStyle}> Login Using Google </Text>
            
      </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    "GooglePlusStyle":{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: MID_BLUE,
        borderWidth: .5,
        borderColor: '#fff',
        height: 50,
        width:250,
        borderRadius: 100 ,
        margin: 5,
        padding:12,
        
    },
    "ImageIconStyle":{
        padding: 10,
        margin: 5,
        marginRight:18,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
    },
    "TextStyle":{
        color: "#fff",
        marginBottom : 4,
        marginRight :20,
        fontSize:15,

    }
})

export default SignInGoogle