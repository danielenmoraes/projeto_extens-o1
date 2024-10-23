import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './componentes/Header'
import Balances from './componentes/Balances'
import Movements from './componentes/Movements'
import Actions from './componentes/Actions'

const list = [
{
  id: 1,
  label : 'Boleto conta de luz',
  value: '400,21',
  date: '10/10/2024',
  type: 0 //despesas,
},
{ id: 2,
  label : 'Pix X',
  value: '400,21',
  date: '03/10/2024',
  type: 1 //entradas,
},
{ id: 3,
  label : 'Salário',
  value: '10.000,00',
  date: '02/10/2024',
  type: 1 //receitas,
},
]


export default function Home() {
  return (
    <View style={styles.container}>
       <Header name="Danielen Moraes" />
       <Balances saldo="7.500,00" gastos="-1.500,00"/>

       <Actions/>

       <Text style={styles.title}>últimas movimentações</Text>
       <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => <Movements data={item} />}
       /> 

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title : {
    fontSize : 18,
    fontWeight: 'bold',
    margin: 14
  },
  list : {
    marginStart: 14,
    marginEnd: 14,
    
  }
});
