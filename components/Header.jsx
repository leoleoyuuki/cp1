import {View, Image, StyleSheet, Text} from 'react-native'

export default function Header(){

    
    return(
        <View style={styles.viewHeader}>
            <Image style={styles.imgLogo} source={require('../assets/logo.png')}/>
            <Text style={[styles.textLogo,{paddingRight:20}]}>Women's<Text style={{color:'#ff4600',}}>Workout</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        backgroundColor:'#000',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    imgLogo:{
        width: 70,
        height: 70
    },
    textLogo:{
        color:'#fff',
        fontWeight: '600',
        fontSize: 18,
    }
})