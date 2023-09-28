import React from 'react';
import {
    Image,
    Text,
    View,
    FlatList,
    ImageBackground
} from 'react-native';
import { recipes } from '../data/RecipeData';
import styles from './RecipeScreenStyle';

/** 
* Renders a detailed recipe with an image showing on the top, followed by the recipe title and 
* some basic information (eg. preparing time)at the middle of the screen 
* and followed by the detailed ingredients needed and steps
* for preparing the dish.
*/
export default function RecipeScreen({ route, navigation }) {
    /**
     * Get the params of the route passing from the home screen.
     * If the user is trying to get the recipe tab right after starting the app, 
     * a random recipe will be shown.
     */
    let item;
    if (route.params == undefined) {
        const random = Math.floor(Math.random() * 30);
        item = recipes[random];
    } else {
        item = route.params.item;
    }


    const setIngredients = ({ item }) => (
        <View style={{ paddingVertical: 2, flex: 1, justifyContent: 'center' }}>
            <Text style={{ letterSpacing: 0.2, color: '#F2D4D7', shadowOpacity: 0.3 }}> {`\u2022`} {item.amount} {item.unit} {item.name}</Text>
        </View>
    );
    const setSteps = ({ item }) => (
        <View style={{ marginLeft: 10 }}>
            <Text style={{ paddingVertical: 5, letterSpacing: 0.3, color: '#F2D4D7', shadowOpacity: 0.3 }}>- {item.step}</Text>
        </View>
    );

    return (

        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <ImageBackground style={styles.recipeImage} source={{ uri: item.image }}>
                </ImageBackground>
                <Text style={styles.recipeTitle}>{item.title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image style={styles.icon} source={require('../../assets/stopwatch.png')} />
                <Text>{item.readyInMinutes} mins </Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image style={styles.icon} source={require('../../assets/food.png')} />
                <Text>serving {item.servings} people</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image style={styles.icon} source={require('../../assets/best-price.png')} />
                <Text>$ {Math.round((item.pricePerServing) / 6)}</Text>
            </View>
            <Text style={styles.stepAndIngText}>INGREDIENTS: </Text>
            <FlatList style={styles.stepAndIngDetails} vertical numColumns={2} data={item.extendedIngredients} renderItem={setIngredients} keyExtractor={(item) => `${item.id}`}></FlatList>
            <Text style={styles.stepAndIngText}>STEPS</Text>
            <FlatList style={styles.stepAndIngDetails} vertical numColumns={1} data={item.analyzedInstructions[0].steps} renderItem={setSteps} ></FlatList>
        </View>

    );
}
