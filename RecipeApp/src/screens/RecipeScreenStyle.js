import { StyleSheet } from "react-native";

const recipeStyles = StyleSheet.create({
    container: {
        width: 'auto',
        flex: 1
    },
    headingContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer:{
        flexDirection:'row'
    },
    recipeImage: {
        width: '100%',
        height: 150,
        borderColor: '#FFDFDD',
    },
    recipeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FC6C85',
        backgroundColor: '#F2D4D7',
        marginVertical: 10,
        padding:10
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:10
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    favoriteIcon: {
        height: 60,
        width: 60,
        opacity: 0.8
    },
    stepAndIngText:{
        fontSize: 15, 
        fontWeight: 'bold', 
        margin:10,
        color:'grey'
    },
    stepAndIngDetails:{
        backgroundColor: '#FC6C85', 
        borderRadius: 10, 
        height: 'auto',
        paddingTop:5
    }


});
export default recipeStyles;