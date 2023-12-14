import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useCart } from '../../context/cart';

const CheckoutScreen = ( {navigation} ) => {
  const { cart, totalValue, removeAllOfType, removeAllItems } = useCart();

  // Função para lidar com a finalização da compra
  const handleCheckout = () => {
    cart.forEach((item) => removeAllOfType(item.id));
  };

  const handleRemoveAllItems = () => {
    navigation.navigate('Home');
    removeAllItems();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revise seu pedido</Text>
      <Text style={styles.subtitle}>Itens inclusos:</Text>
      <View style={styles.cartItems}>
        {cart.map((item) => (
          <Text key={item.id} style={styles.itemText}>{`${item.name} x${item.count}`}</Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Total: R${totalValue.toFixed(2)}</Text>
      <Button title="Confirmar Pedido" onPress={handleRemoveAllItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  cartItems: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CheckoutScreen;
