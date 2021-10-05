import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ProductCard from './components/ProductCard/ProductCard';
import product_data from './product-card.json';
import SearchBarr from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(product_data);
  const onSearched = text => {
    const filteredList = product_data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1; nbb
    });
    setList(filteredList);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={<SearchBarr prod={{onSearched}} />}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
