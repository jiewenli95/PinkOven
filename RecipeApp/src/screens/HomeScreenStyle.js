import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'flex-start',
        width: 'auto',
        marginBottom: 25,
        paddingVertical: 15,
        backgroundColor:'#F2D4D7',
        borderRadius:20,
    },
    title :{
        fontSize: 18,
        fontWeight:'bold',
        marginTop: 10,
        color: '#F8F6F0',
        shadowOpacity:0.1,
        marginLeft:20
    }, 
    image: {
        width: '90%',
        height: 140,
        marginHorizontal:20,
    }, 
    iconImage: {
        height: 30, 
        width: 30, 
        opacity: 0.8, 
        marginVertical: 10 
    }
});

export default homeStyles;