import { StyleSheet } from "react-native";

const timerStyles = StyleSheet.create({
    timerText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight:'bold',
        color: '#FC6C85',
        padding: 10,
        margin: 10,
    },
    cookingTimerText:{
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
        color:'#F2D4D7',
        backgroundColor:'#FC6C85',
        marginVertical:10,
        padding:20
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20
    },
    buttons: {
        width: '40%',
        height: 40,
        backgroundColor: '#F8C8DC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
    },
    disabled: {
        color: 'white',
        width: '40%',
        height: 40,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20

    },
    buttonText: {
        color: 'white'
    }
});
export default timerStyles;