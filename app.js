import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Digite seu nome:</Text>
      <TextInput 
        style={{ borderBottomWidth: 1, width: 200, marginTop: 10, textAlign: 'center' }} 
        onChangeText={setNome} 
        placeholder="Seu nome aqui"
      />

      //CODIGO REPASSADO ATÉ AQUI SEGUNDA ----------------------------------------------------------------
      <Text style={{ fontSize: 20, marginTop: 20 }}>Olá, {nome}!</Text>
    </View>
  );
}


/*

Questoes avaliação

1 - Qual a função do useState no código? Explique como ele funciona. 

2 - Para que serve a tag <TextInput>? Quais propriedades foram usadas nela no código e qual sua função? 

3 - O que faz o trecho de código {nome} dentro da tag <Text>? 