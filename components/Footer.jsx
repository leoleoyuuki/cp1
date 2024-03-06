import { View, Text, StyleSheet} from "react-native";

export default function Footer(){
    return(
        <View style={styles.espacamento}>
            <Text>Leonardo Yuuki - Rm550373</Text>
            <Text>Daniel Delfin - Rm552184</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    espacamento:{
        marginTop: 600
    }
})