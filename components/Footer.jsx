import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.viewHeader}>
            <Image style={styles.icon} source={require('../assets/logo.png')}/>
            <Text style={[styles.textLogo,{paddingRight:20, color:'#fff'}]}>Women's<Text style={{color:'#ff4600',}}>Workout</Text></Text>
        </View>
            <Text style={styles.txtFooter}>Desenvolvido por LeoYuuki & Daniel Soares</Text>
            <Text style={[styles.txtFooter, {color: '#ff4400c6'}]}>&copy; 2024 Direitos Reservados</Text>
            {/* Adicionando um ícone como exemplo */}
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 7,
        padding: 7,
        backgroundColor: '#000',
        justifyContent: 'center', // Centraliza os elementos horizontalmente
        alignItems: 'center', // Centraliza os elementos verticalmente

    },
    viewHeader:{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    txtFooter: {
        textAlign: 'center',
        color: '#d2c7ba',
        fontSize: 14,
        padding: 2,
    },
    icon: {
        width: 40, // Ajuste o tamanho conforme necessário
        height: 40, // Ajuste o tamanho conforme necessário
        marginLeft: 10, // Adiciona um espaço à esquerda do ícone
    },
});
