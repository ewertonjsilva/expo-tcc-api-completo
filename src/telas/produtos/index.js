import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
// https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// https://github.com/react-native-picker/picker 
// depois como adm em um prompt
// npm install @react-native-picker/picker@2.4.2 --force
import { Picker } from '@react-native-picker/picker';
// https://docs.expo.dev/guides/icons/
// https://icons.expo.fyi/
import { FontAwesome } from '@expo/vector-icons';

import img1 from '../../../assets/imgTemp/lancheBasico.jpg';
import img2 from '../../../assets/imgTemp/hamburger-bacon.jpg';
import img3 from '../../../assets/imgTemp/hamburger-batata.jpg';
import img4 from '../../../assets/imgTemp/sorvete.jpeg';
import img5 from '../../../assets/imgTemp/sucoLaranja.jpg';
import img6 from '../../../assets/imgTemp/sucoVerde.jpg';


import styles from './styles';

import CardItem from './cardItem';

/*
  nome - descrição - tipo - valor - imagem
*/

export default function Produtos() {
  const [tipoSel, setTipoSel] = useState([]);
  const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
  // const [tipoProduto, setTipoProduto] = useState(
  //   [
  //     { id: 0, tipo: 'Tipo' },
  //     { id: 1, tipo: 'Lanche' },
  //     { id: 2, tipo: 'Porção' },
  //     { id: 3, tipo: 'Suco' }
  //   ]
  // );
  let itemIndex = 0;

  // produtos
  const [produtos, setProdutos] = useState(
    [
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
    ]
  );
  const numColumns = 3;

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>

        <View style={styles.pesquisa}>
          <Picker
          selectedValue={tipoSel} 
          onValueChange={(itemValue) => setTipoSel(itemValue)} 
          style={styles.picker}
        >
          {
            tipoProduto.map(tp => {
              return <Picker.Item label={tp} value={tp} key={tp} />
            })
          }          
        </Picker>
          <TextInput placeholder='Pesquisar por...' style={styles.input} />
          <TouchableOpacity style={styles.botaoPesquisa} >
            <FontAwesome name="search" size={16} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.itensPesquisa}>
          <View style={styles.itemPesquisa}>
            <Text style={styles.txtTituloProd}>Lanche de Frango</Text>
            <Image style={styles.img} source={img1} />
            <Text>15,00</Text>
          </View>
          <View style={styles.itemPesquisa}>
            <Text style={styles.txtTituloProd}>Lanche de Peixe</Text>
            <Image style={styles.img} source={img2} />
            <Text>17,00</Text>
          </View>
          <View style={styles.itemPesquisa}>
            <Text style={styles.txtTituloProd}>Bolo</Text>
            <Image style={styles.img} source={img3} />
            <Text>20,00</Text>
          </View>
          <View style={styles.itemPesquisa}>
            <Text style={styles.txtTituloProd} numberOfLines={1} ellipsizeMode="tail">Fritas rústica da casa ao lado com farinha</Text>
            <Image style={styles.img} source={img4} />
            <Text>20,00</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

/*
<View style={styles.container}>
      <View style={styles.pesquisa}>
        <Picker
          selectedValue={tipoSel} 
          onValueChange={(itemValue) => setTipoSel(itemValue)} 
          style={styles.picker}
        >
          {
            tipoProduto.map(tp => {
              return <Picker.Item label={tp.tipo} value={tp.id} key={tp.id} />
            })
          }          
        </Picker>
        <TextInput placeholder='Pesquisar por...' style={styles.input} />
        <TouchableOpacity style={styles.botaoPesquisa} >
          <FontAwesome name="search" size={16} color="black" />
        </TouchableOpacity>      
      </View> 
      <SafeAreaView>
        <FlatList 
          data={produtos} 
          renderItem={ ({item}) => <CardItem item={item} navigation={navigation} /> } 
          keyExtractor={ item => item.id} 
          numColumns={numColumns} 
          style={styles.flat}
        />
      </SafeAreaView>      
    </View>

*/