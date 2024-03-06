import {View, Image, StyleSheet, Text} from 'react-native'

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <Image style={styles.imgLogo} source={require('../assets/logo.png')}/>
            <Text style={[styles.textLogo,{paddingRight:20}]}>amendoa<Text style={{color:'#b46e2d',}}>Workout</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        backgroundColor:'#46301c',
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
        fontFamily: 'Roboto'
    }
})