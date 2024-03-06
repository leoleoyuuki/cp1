import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.viewAndroid}>
      <SafeAreaView>
        <Header/>

        <View style={styles.backgroundView}>
          <Text style={[styles.txtCenter]}>Home Workouts</Text>
        </View>

        <View>
          Selecione o Seu Tipo de Treino
        </View>
        
        <Footer />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewAndroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    backgroundColor: "#ffffff",
    font: 'Roboto',
  },
  txtCenter:{
    textAlign: 'center',
  },
  backgroundView:{
    backgroundColor: '#d93f50',
  }
});
