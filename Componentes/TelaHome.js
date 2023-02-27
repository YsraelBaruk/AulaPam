import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';

export default function TelaHome (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Como navegar?
      </Text>

      <Text style={estilo.texto}>
        Toque nas abas abaixo para navegar entre as telas. 
      </Text>

      <View style={estilo.botao}>
        <Button onPress={()=>{props.navigation.openDrawer()}} title='Abrir Menu' color='red'/>
      </View>

      <View style={estilo.botao}>
        <Button onPress={()=>{props.navigation.navigate('Descrição')}} title='Descrição'/>
      </View>

    </View>
  );
}