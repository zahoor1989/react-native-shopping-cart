import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image} from 'react-native';

import { CartContext } from '../CartContext';

export function Cart ({navigation, }) {

  const {items, getItemsCount, addItemToCart,removeItemToCart, getTotalPrice} = useContext(CartContext);
  
  const Totals = () => {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>AED {total}</Text>
       </View>
    );
  }

  const renderItem = ({item}) => {
    return (
       <View style={styles.cartLine}>
          <View style={styles.imageContainer}>
          <Image style={styles.thumb} source={item.product.image} />
          </View>
          <View style={styles.btnContainer}>
              <Button style={styles.btn} onPress={() => removeItemToCart(item.id)}  title="-"/ >
              <Text style={styles.lineCenter}> {item.qty}</Text>
              <Button style={styles.btn}  onPress={() => addItemToCart(item.id)} title="+"/ >
          </View>
          <View style={styles.totalContainer}> 
          <Text style={styles.lineRight}>AED {item.totalPrice}</Text>
          </View>
       </View>
    );
  }
  
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flex:2,
    flexDirection: 'row',
    textAlign:'center',
    margin:2
  },
  imageContainer: { 
    flex:2
  },
  btnContainer: { 
    flex:2,
    flexDirection:'row',
    textAlign:'center'
  },
  totalContainer: { 
    flex:1
  },
  btn:{
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 1,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineCenter: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333',
    textAlign:'center' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  thumb: {
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '60%',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
