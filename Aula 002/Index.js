import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PageCep() {
  const [MeuEnd, setMeuEnd] = useState([]);

  useEffect(() => {
    getCep();
  }, []);

  async function getCep() {
    try {
      await axios
        .get(`https://viacep.com.br/ws/78555000/json/`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setMeuEnd(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (erro) {
      console.log(erro);
    }
  }

  
  return (
    <View style={styles.container}>
      <Text>Meu endereço é: { MeuEnd.logradouro }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});