import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function TelaRotas (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        O que é uma rota?
      </Text>

      <Text style={estilo.texto}>
        Rota é a associação entre um componente e o caminho até ele
      </Text>

      <View style={estilo.botao}>
        <AntDesign onPress={()=>{props.navigation.navigate('Home')}} name="home" size={24} color="black" />
      </View>

    </View>
  );
}