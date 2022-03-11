
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CartContext } from '../CartContext';

export const CartIcon = ({navigation}) => {
  const {getItemsCount, deleteCartItems} = useContext(CartContext);
  return (
    <View style={styles.cartLine}>
      <Button title='Delete' onPress={() => deleteCartItems()}/>
      <View style={styles.container}>
        <Text style={styles.text} 
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >Cart ({getItemsCount()})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row'
  },
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 5,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
