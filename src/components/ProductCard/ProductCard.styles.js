import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#F3CFC6',
    margin: 10,
    borderRadius: 12,
  },
  image_container: {
    borderRadius: 20,
  },

  image: {
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    resizeMode: 'contain',
  },
  text_container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    paddingVertical:7,
  },
  stock:{
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
  }
});
