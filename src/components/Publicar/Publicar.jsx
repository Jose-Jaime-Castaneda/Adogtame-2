import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ip } from '../../api/ip.mjs';

const Publicar = () => {
  useEffect(() => {
    fetch(`http://${ip}:3000/adogtame/publicaciones/`, { method: "POST" })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error en la solicitud de red:', error);
      });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Publicar</Text>
      </View>
    </SafeAreaView>
  );
};

export default Publicar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
