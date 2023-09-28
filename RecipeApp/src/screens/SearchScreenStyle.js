import { StyleSheet } from "react-native";
const searchStyles = StyleSheet.create({
    input_unclicked: {
        height: 40,
        width: '70%',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFDFDD'

    },
    input_clicked: {
        height: 40,
        width: '70%',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    container: {
        flex:1,
        alignItems:'flex-start',
        width: 'auto',
        marginBottom: 25,
        paddingVertical: 15,
        backgroundColor:'#F2D4D7',
        borderRadius:20,
    },
    title: {
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
        borderRadius: 20,
        marginLeft:20
    },
    iconImage: {
        height: 30, 
        width: 30, 
        opacity: 0.8, 
        marginVertical: 10 
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        opacity: 0.3
    },
    placeholderImage:{
        width: 300,
        height:300,
        opacity:0.5
    },
    notFindContainer:{
        flexDirection:'column',
        alignItems:'center'
    },
    placeHolderText:{
        fontSize:25,
        fontWeight:'bold',
        margin:20,
        color:'grey',
        fontStyle:'italic'
    }
});
export default searchStyles;