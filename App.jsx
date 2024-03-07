import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";


import Footer from "./components/Footer";
import Header from "./components/Header";
import BenefitsSection from "./components/Benefits";
import MuscleSection from "./components/Musculo";
import ShortVideo from "./components/Shorts";


export default function App() {
  return (
    <View style={{ backgroundColor: '#eabd79', width: '100%' }}>
      <ScrollView >
        <StatusBar backgroundColor="#46301c" barStyle="light-content" />
        <SafeAreaView>
          <View style={{ alignItems: 'center', backgroundColor: '#46301c' }}>
            <Header />
          </View>


          <View style={styles.backgroundViewWorkout}>
            <Text style={styles.txtWorkouts}>Guia nos Workouts 💪🏻🔥</Text>
          </View>

          {/* SECTION1 */}
          <View style={styles.heroContainer}>
            <Image
              source={require('./assets/home-workout-hero.png')}
              style={styles.heroImage}
              resizeMode="cover"
            />

          </View>


          {/* SECTION2 */}

          <View style={styles.section2}>

            <View>
              <View style={styles.lineUnderElement} />
              <Text style={styles.txtSection2}>Selecione o Seu Treino</Text>
            </View>
            <View style={styles.tiposTreino}>
              <View style={styles.containerTreino}>
                <Image source={require('./assets/abdominal.jpg')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Abdomen</Text>
              </View>
              <View style={styles.containerTreino}>
                <Image source={require('./assets/agachamento.jpg')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Perna</Text>
              </View>

              <View style={styles.containerTreino}>
                <Image source={require('./assets/desenvolvimento.jpg')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Ombro</Text>
              </View>

              <View style={styles.containerTreino}>
                <Image source={require('./assets/supino.webp')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Peito</Text>
              </View>

              <View style={styles.containerTreino}>
                <Image source={require('./assets/costas.webp')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Costas</Text>
              </View>

              <View style={styles.containerTreino}>
                <Image source={require('./assets/braco.jpg')} style={styles.imageRounded} />
                <Text style={styles.txtTreino}>Braço</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>

              <View>
                <View style={[styles.lineAboveElement,{width:'100%'}]} />
                <Text style={[styles.txtSection2, { textAlign: 'right' }]}>Escolha e comece agora !</Text>
              </View>

            </View>
          </View>


          <ShortVideo />
          <BenefitsSection />

          <MuscleSection />
          <Footer />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  txtWorkouts: {
    textAlign: 'center',
    color: '#d2c7ba',
    fontSize: 12,
    padding: 2,

  },

  viewHeader: {
    width: '100%',
    backgroundColor: '#46301c',
  },
  backgroundViewWorkout: {
    backgroundColor: '#8d4925',
    padding: 3
  },
  heroContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: '100%',
    height: 450,
  },

  heroTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textShadowColor: '#46301ca3',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },

  heroButtonText: {
    color: 'white',
    fontSize: 16,
  },
  section2: {
    paddingTop: 30,

  },
  txtSection2: {
    fontSize: 15,
    fontWeight: '600',
    color: '#46301c',
    marginLeft: 10,

  },
  lineAboveElement: {
    height: 1, // Espessura da linha
    width: '56%', // Largura da linha
    backgroundColor: 'black', // Cor da linha
    marginBottom: 10, // Espaço abaixo da linha
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  lineUnderElement: {

    height: 1, // Espessura da linha
    width: '56%', // Largura da linha
    backgroundColor: 'black', // Cor da linha
    marginBottom: 10, // Espaço abaixo da linha
  },

  tiposTreino: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  containerTreino: {
    alignItems: 'center',
    gap: 10,
  },
  txtTreino: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#46301c',
  },
  imageRounded: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
