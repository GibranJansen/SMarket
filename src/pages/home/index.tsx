import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { DATA, ItemData } from '../../components/DataItems';
import { useCart } from '../../context/cart';
import { Header } from '../../components/Header';
import { useFavorites } from '../../context/favorites';

export const Itemf = ({ data2 }: { data2: ItemfData }) => {
  const { addf } = useFavorites();
};
export const Item = ({data}: {data: ItemData}) => {
  const { add } = useCart()
  

  return (
  <TouchableOpacity onPress={() => add(data)} style={styles.view}>
    <Image style={styles.image} source={data.image}></Image>
    <Text style={styles.Name}>{data.name}</Text>
    <Text style={styles.texto2}>R${data.price.toFixed(2)}</Text>
    <TouchableOpacity onPress={() => addf(data)} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar aos Favoritos</Text>
      </TouchableOpacity>
  </TouchableOpacity>
)};

export default function Home() {
    return (
      <View style={{flex: 1, backgroundColor: '#fcb238'}}>
        <Header title='GibranMarket'/>
        <FlatList style={styles.list}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item: ItemData) => item.id}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    list:{ 
      marginBottom: 90 
    },
    view:{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image:{
      width: 50,
      height: 50
    },
    Name:{
      fontSize: 24, 
      marginRight: 'auto', 
      paddingLeft: 10, 
      paddingTop:10
    },

    button: {
      backgroundColor: '#fb9540',
      padding: 0,
      borderRadius: 5,
      height: 30,
      width: 70,
      marginLeft: 5,
      marginTop: 10
    },
    buttonText: {
      color: '#fff',
      fontSize: 10,
      textAlign: 'center',
    },

    texto2:{
      fontSize: 16, 
      marginRight: 'auto', 
      paddingLeft: 10, 
      paddingTop:10
    }

})