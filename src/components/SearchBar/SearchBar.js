import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import styles from "./SearchBar.style";

const SearchBar = (props) => {

    return (
        <View style={styles.container}>
            <TextInput placeholder='Search a music' onChangeText={props.onSearch} />
        </View>
    );
}

export default SearchBar;
