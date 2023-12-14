import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from '../../context/cart';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export interface ItemData {
  id: string;
  image: any;
  name: string;
  price: number;
  count: number;
}

export const Item = ({ data }: { data: ItemData }) => {
  const { remove, removeAllOfType } = useCart();

  const handleRemoveOne = () => {
    remove(data);
  };

  const handleRemoveAll = () => {
    removeAllOfType(data.id);
  };

  return (
    <TouchableOpacity onPress={handleRemoveOne} style={styles.viewItem}>
      <Image style={styles.image} source={data.image}></Image>
      <Text style={styles.Name}>
        {data.name} {data.count}x{' '}
      </Text>
      <Text style={{ fontSize: 16 }}>R${data.price.toFixed(2)}</Text>
      <TouchableOpacity onPress={handleRemoveAll}>
        <Text style={{ color: 'red', marginLeft: 15, fontSize: 10 }}>Excluir todos</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default function Cart({ navigation }) {
  const { cart, totalValue } = useCart();
  const handlecheckout = () => {
    // Adicione a lógica para autenticar o usuário e navegar para a tela Home se as credenciais estiverem corretas
    navigation.navigate('Checkout');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fcb238' }}>
      <Header image="cart" title='Carrinho de Compras' />
      <FlatList
        style={styles.list}
        data={cart}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item: ItemData) => item.id}
      />
      <View style={styles.totalValue}>
        <Text style={styles.Texto}>Total no Carrinho: R${totalValue.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={handlecheckout}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  totalValue: {
    backgroundColor: '#fff',
    padding: 25,
    height: 75,
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Texto: {
    fontSize: 20,
  },
  viewItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button:{
    backgroundColor: '#fc953f',
    height: 40,
    width: 70,
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center'
},
buttonText:{
    color: '#fff',
    fontWeight: 'bold'
},

  image: {
    width: 50,
    height: 50,
  },
  list: {
    marginBottom: 90,
  },
  Name: {
    fontSize: 24,
    marginRight: 'auto',
    paddingLeft: 10,
    paddingTop: 10,
  },
});
