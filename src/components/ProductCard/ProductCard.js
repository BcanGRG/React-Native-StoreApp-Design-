import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.styles';

const ProductCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.product.imgURL}} />
      
      <View style={styles.text_container}>
        <Text style={styles.title}>{props.product.title}</Text>
        <Text>{props.product.price}</Text>
        <Text style={styles.stock}>
          {props.product.inStock == false ? 'Stokta Yok' : null}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
