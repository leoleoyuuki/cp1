import { View, Text, StyleSheet} from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.txtFooter}>Desnvolvido por LeoYuuki & Daniel Soares</Text>
            <Text style={styles.txtFooter}> &copy; 2024 Direitos Reservados</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    footer:{
        marginTop: 20,
        backgroundColor: '#8d4925',
    },
    txtFooter: {
        textAlign: 'center',
        color: '#d2c7ba',
        fontSize: 14,
        padding: 2,
      },
    
})