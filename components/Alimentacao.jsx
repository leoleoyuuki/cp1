import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Alimentacao = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Alimentação para Melhorar o Desempenho Físico</Text>
      <View style={styles.content}>
        <View style={styles.block}>
          <Image source={require('../assets/image1.jpg')} style={styles.image} />
          <Text style={styles.text}>
            Consuma alimentos ricos em carboidratos e proteínas 2 a 3 horas antes do treino.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.text}>
            Durante o treino, é importante manter-se hidratado.
          </Text>
          <Image source={require('../assets/image2.jpg')} style={styles.image} />
        </View>
        <View style={styles.block}>
          <Image source={require('../assets/image3.jpg')} style={styles.image} />
          <Text style={styles.text}>
            Após o treino, é importante repor com bebidas isotônicas que não tenham muito açúcar.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.text}>
            Para ganhar massa muscular, o pós-treino deve ser feito no máximo 45 minutos após o treino.
          </Text>
          <Image source={require('../assets/image4.jpg')} style={styles.image} />
        </View>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    padding: 20,
 },
 sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff4600',
 },
 content: {
    flexDirection: 'column',
 },
 block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
 },
 image: {
    width: 150,
    height: 120,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
 },
 text: {
    fontSize: 14,
    width: 200,
    marginHorizontal: 10,
    color: '#ff4600b3',
 },
});

export default Alimentacao;
