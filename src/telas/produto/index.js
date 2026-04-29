import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/imgTemp/lancheBasico.jpg';
import img2 from '../../../assets/imgTemp/hamburger-bacon.jpg';
import img3 from '../../../assets/imgTemp/hamburger-batata.jpg';
import img4 from '../../../assets/imgTemp/sorvete.jpeg';
import img5 from '../../../assets/imgTemp/sucoLaranja.jpg';
import img6 from '../../../assets/imgTemp/sucoVerde.jpg';



// export default function Produto({route}) {
export default function Produto() {

  // produtos
  const produtos = [
      { id: 0, nome: 'Lanche de Frango', img: img1, valor: 'R$ 15,00', descricao: 'Lanche maravilhoso' },
      { id: 1, nome: 'Lanche de Peixe', img: img2, valor: 'R$ 25,00', descricao: 'Lanche maravilhoso' },
      { id: 2, nome: 'Bolo', img: img3, valor: 'R$ 10,00', descricao: 'Lanche maravilhoso' },
      { id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img4, valor: 'R$ 19,00', descricao: 'Lanche maravilhoso' },
      { id: 4, nome: 'Suco de laranja', img: img5, valor: 'R$ 8,25', descricao: 'Lanche maravilhoso' },
      { id: 5, nome: 'Suco verde', img: img6, valor: 'R$ 12,00', descricao: 'Lanche maravilhoso' },
      { id: 6, nome: 'Suco', img: img6, valor: 'R$ 13,00', descricao: 'Lanche maravilhoso' },
      { id: 7, nome: 'Suco', img: img6, valor: 'R$ 14,00', descricao: 'Lanche maravilhoso' },
      { id: 8, nome: 'Suco', img: img6, valor: 'R$ 15,00', descricao: 'Lanche maravilhoso' },
      { id: 9, nome: 'Suco', img: img6, valor: 'R$ 16,00', descricao: 'Lanche maravilhoso' },
      { id: 10, nome: 'Suco', img: img6, valor: 'R$ 17,00', descricao: 'Lanche maravilhoso' },
      { id: 11, nome: 'Suco', img: img6, valor: 'R$ 18,00', descricao: 'Lanche maravilhoso' },
      { id: 12, nome: 'Suco', img: img6, valor: 'R$ 19,00', descricao: 'Lanche maravilhoso' },
    ];

  //   const nome = route.params.item.nome;
  const [produto, setProduto ]= useState(produtos[0]);
  // console.log(produto);
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>{nome}</Text> */}
      <Text style={styles.titulo}>Nome</Text>
      <View style={styles.containerImg}>
        {/* <Image style={styles.tinyLogo} source={route.params.item.img} /> */}
        <Image style={styles.tinyLogo} source={produto.img} />
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