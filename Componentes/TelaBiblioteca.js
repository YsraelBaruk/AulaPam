import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function TelaBiblioteca (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Qual biblioteca usamos?
      </Text>

      <Text style={estilo.texto}>
        Das bibliotecas que utilizamos podemos destacar duas:
      </Text>

      <Text style={estilo.texto}>
        @react-navigation/native e 
      </Text>
      
      <Text style={estilo.texto}>
        @react-navigation/bottom-tabs.
      </Text>

      <View style={estilo.botao}>
        <AntDesign onPress={()=>{props.navigation.navigate('Home')}} name="home" size={24} color="black" />
      </View>

    </View>
  );
}