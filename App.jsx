import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.viewAndroid}>
        <SafeAreaView>
          <View style={styles.backgroundView}>
            <Header style={{margin:"auto"}}/>
          </View>
          <View style={styles.backgroundViewWorkout}>
            <Text style={[styles.txtCenter]}>Home Workouts</Text>
          </View>
          <View>
            <Text style={[styles.txtG]}>Selecione o Seu Tipo de Treino</Text>
            <View>
      
            </View>
          </View>
      
          <Footer />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewAndroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    backgroundColor: "#ce9852",
    font: 'Roboto',
  },
  txtCenter:{
    textAlign: 'center',
  },
  txtG:{
    fontSize: 18,
  },
  viewHeader:{
    width: '100%',
    backgroundColor:'#46301c',
  },
  backgroundViewWorkout:{
    backgroundColor: '#8d4925',
    padding: 3
  }
});
