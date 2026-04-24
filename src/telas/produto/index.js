import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'; 

import styles from './styles';

// export default function Produto({route}) {
export default function Produto() {

//   const nome = route.params.item.nome;
  
  return (
    <View style={styles.container}>
        {/* <Text style={styles.titulo}>{nome}</Text> */}
        <Text style={styles.titulo}>Nome</Text>
        <View style={styles.containerImg}>
          {/* <Image style={styles.tinyLogo} source={route.params.item.img} /> */}
          <Image style={styles.tinyLogo} />
        </View>        
        {/* <Text style={styles.valor}>{route.params.item.valor}</Text> */}
        <Text style={styles.valor}>Valor</Text>
        <View style={styles.containerDesc}>
          {/* <Text style={styles.text}>{route.params.item.descricao}</Text> */}
          <Text style={styles.text}>Descricao</Text>
        </View>        
    </View>
  );
}