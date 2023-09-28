import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { recipes } from '../data/RecipeData';
import PinkOvensHeader from './Header';
import styles from './HomeScreenStyle';


/** 
* Renders a list of the recipes with their titles and images.
*/
export default function HomeScreen({ navigation }) {

    /** 
    * Renders each recipe on the main screen which can be pressed into it.
    */
    const setRecipe = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Recipe", { item })}>
            <View style={styles.container}>

                <ImageBackground style={styles.image} source={{ uri: item.image }}>

                    <>
                        <View style={{ flexDirection: 'column', alignItems:'flex-end' }}>
                            {item.vegetarian &&
                                <Image style={styles.iconImage} source={require('../../assets/vegan.png')} />
                            }
                            {item.glutenFree &&
                                <Image style={styles.iconImage} source={require('../../assets/gluten-free.png')} />
                            }
                            {item.dairyFree &&
                                <Image style={styles.iconImage} source={require('../../assets/dairy-free.png')} />
                            }
                        </View>
                    </>
                </ImageBackground>

                <Text style={styles.title}> {item.title} </Text>

            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <PinkOvensHeader />
            <FlatList vertical data={recipes} renderItem={setRecipe} keyExtractor={(item) => `${item.id}`} />
        </View>
    );
}




