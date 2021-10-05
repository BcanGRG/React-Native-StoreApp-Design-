import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Arama" onChangeText={props.prod.onSearched} />
    </View>
  );
};

export default SearchBar;
