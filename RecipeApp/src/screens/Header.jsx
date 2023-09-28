import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

/**
 * Renders a simple reusable Header with the Icon and App name
 */
export default function PinkOvensHeader() {
    const styles = StyleSheet.create({
        heading:{
            flexDirection:'row-reverse',
            backgroundColor:'#FFDFDD',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:10
        },
        headingText:{
            textAlign:'center',
            justifyContent:'space-evenly',
            fontSize:40,
            fontWeight:'bold',
            color:'#FC6C85',
            height:90,
            paddingTop:20
        },
        headingIcon:{
            height: 40,
            width:40,
            marginEnd:20
        }
    });

    return (
        <View style={styles.heading}>
            <Text style={styles.headingText} numberOfLines={1}>Pink Ovens</Text>
            <Image style={styles.headingIcon} source={require('../../assets/healthy-eating.png')}/>
        </View>
    );
}