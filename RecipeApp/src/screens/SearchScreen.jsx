import React from 'react';
import {Text, 
        View, 
        TouchableOpacity, 
        Image, 
        ImageBackground,
        FlatList, 
        Button, 
        TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { recipes } from '../data/RecipeData';
import PinkOvensHeader from './Header';
import styles from './SearchScreenStyle';

/** 
* Renders the search section for the user to search for the recipe name in the search box.
* If no recipe fulfilling the search request or nothing has been typed in, the default icon will be shown.
*/
export default function SearchScreen({ navigation }) {
    
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [clicked, setClicked] = useState(false);
   
    //The function will be called as the search text changes.
    useEffect(() => { }, [search]);

    const handleSearch = (text) => {
        setSearch(text);
        const result = getRecipeByName(text);
        if (result == '' || text == '') {
            setSearchResult([]);

        } else {
            setSearchResult(result);
        }
    }

    // Get the recipe array with the searching text
    function getRecipeByName(recipeText) {
        const recipeTextLower = recipeText.toLowerCase();
        const recipeResult = [];
        recipes.map(item => {
            if (item.title.toLowerCase().includes(recipeTextLower)) {
                recipeResult.push(item);
            }
        });
        return recipeResult;
    }


    // Renders the recipe array after search
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
            <View style={styles.searchContainer}>
                <Image style={styles.searchIcon} source={require('../../assets/search.png')} />
                <TextInput
                    style={clicked ? styles.input_clicked : styles.input_unclicked}
                    placeholder='Search a recipe...'
                    onChangeText={handleSearch}
                    onPressIn={() => setClicked(true)}
                    value={search}>
                </TextInput>

                <Button title='cancel'
                    onPress={() => {
                        setClicked(false);
                        handleSearch('');
                        setSearch('');
                    }}>
                </Button>
            </View>

            <>
                {searchResult && 
                <View>
                    <FlatList vertical data={searchResult} renderItem={setRecipe} keyExtractor={(item) => `${item.id}`} />
                </View>}
                {searchResult.length==0&&
                <View style={styles.notFindContainer}>
                    <Text style={styles.placeHolderText}>Find your recipe here!</Text>
                    <Image style={styles.placeholderImage} source={require('../../assets/healthy-eating.png')}/>
                </View>}

            </>
            
        </View>
    );
}