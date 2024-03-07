import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BenefitsSection = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Benefícios de Treinar Todos os Músculos</Text>
      <Text style={styles.benefit}>
        - Melhora o Condicionamento Físico: A musculação aprimora a resistência muscular, aumentando a capacidade cardiorrespiratória e melhorando a postura corporal.
      </Text>
      <Text style={styles.benefit}>
        - Acelera o Metabolismo: O treino regular promove a queima de gordura, acelerando o metabolismo e ajudando na perda de peso.
      </Text>
      <Text style={styles.benefit}>
        - Promove o Bem-estar: A atividade física estimula a produção de endorfinas, promovendo a sensação de bem-estar físico e mental. Além disso, aumenta a disposição, melhorando a energia e o estado de alerta.
      </Text>
      <Text style={styles.benefit}>
        - Tratamento do Estresse e Ansiedade: O exercício físico é um aliado no tratamento do estresse, ansiedade e depressão, contribuindo para uma melhor qualidade de vida.
      </Text>
      <Text style={styles.benefit}>
        - Prevenção de Lesões: A prática de musculação sob orientação de um profissional de educação física garante que os movimentos estejam corretos, prevenindo lesões.
      </Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    padding: 20,
    backgroundColor:'#eabd79',
    marginTop: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#46301c',
 },
 benefit: {
    fontSize: 16,
    marginBottom: 10,
    color: '#46301cd9',
 },
});

export default BenefitsSection;
