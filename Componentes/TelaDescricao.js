import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function TelaDescricao (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Nomes das telas
      </Text>

      <Text style={estilo.texto}>
        Perceba que cada aba representa uma tela do aplicativo.
      </Text>

      <View style={estilo.botao}>
        <AntDesign onPress={()=>{props.navigation.navigate('Home')}} name="home" size={24} color="black" />
      </View>
    </View>
  );
}