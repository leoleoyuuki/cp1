import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";


import Footer from "./components/Footer";
import Header from "./components/Header";
import BenefitsSection from "./components/Benefits";
import Alimentacao from "./components/Alimentacao";
import { useRef } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';



export default function App() {


  const sections = [
    {
      muscle: 'Peito',
      description: 'Exercícios para o peito são fundamentais para quem deseja ter um corpo mais definido e forte. O peito é uma das partes do corpo que mais chama a atenção, e por isso, é importante que ele esteja bem trabalhado. Além disso, o peito é uma das partes do corpo que mais tem músculos, e por isso, é importante que ele seja bem trabalhado. Existem vários exercícios para o peito, e cada um deles trabalha uma parte diferente do peito. Além disso, existem exercícios que trabalham o peito de forma mais intensa, e outros que trabalham o peito de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para o peito, e como fazer cada um deles.',
      img: require('./assets/supino.webp'),
      id: 'peito',
      videos: [
        { videoId: 'K3-lDmDXFAY', title: 'Exercício para peito: Press de banco' },
        { videoId: 'K3-lDmDXFAY', title: 'Exercício para peito: Press inclinado' },
        { videoId: 'K3-lDmDXFAY', title: 'Exercício para peito: Press inclinado' },
      ],
    },
    {
      muscle: 'Costas',
      description: 'Exercícios para as costas são fundamentais para quem deseja ter um corpo mais definido e forte. As costas são uma das partes do corpo que mais chama a atenção, e por isso, é importante que elas estejam bem trabalhadas. Além disso, as costas são uma das partes do corpo que mais tem músculos, e por isso, é importante que elas sejam bem trabalhadas. Existem vários exercícios para as costas, e cada um deles trabalha uma parte diferente das costas. Além disso, existem exercícios que trabalham as costas de forma mais intensa, e outros que trabalham as costas de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para as costas, e como fazer cada um deles.',
      img: require('./assets/costas.webp'),
      id: 'costas',
      videos: [
        { videoId: 'LGESMk8EqyI', title: 'Exercício para costas: Remada com barra' },
        { videoId: 'LGESMk8EqyI', title: 'Exercício para costas: Pulldown com barra' },
        { videoId: 'LGESMk8EqyI', title: 'Exercício para costas: Pulldown com barra' },

      ],
    },
    {
      muscle: 'Abdomen',
      description: 'Exercícios para o abdomen são fundamentais para quem deseja ter um corpo mais definido e forte. O abdomen é uma das partes do corpo que mais chama a atenção, e por isso, é importante que ele esteja bem trabalhado. Além disso, o abdomen é uma das partes do corpo que mais tem músculos, e por isso, é importante que ele seja bem trabalhado. Existem vários exercícios para o abdomen, e cada um deles trabalha uma parte diferente do abdomen. Além disso, existem exercícios que trabalham o abdomen de forma mais intensa, e outros que trabalham o abdomen de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para o abdomen, e como fazer cada um deles.',
      img: require('./assets/abdominal.jpg'),
      id: 'abdomen',
      videos: [
        { videoId: 'p1cHou8spPs', title: 'Exercício para Abdomen: Remada com barra' },
        { videoId: 'p1cHou8spPs', title: 'Exercício para Abdomen: Pulldown com barra' },
        { videoId: 'p1cHou8spPs', title: 'Exercício para Abdomen: Pulldown com barra' },
      ],
    },
    {
      muscle: 'Perna',
      description: 'Exercícios para a perna são fundamentais para quem deseja ter um corpo mais definido e forte. A perna é uma das partes do corpo que mais chama a atenção, e por isso, é importante que ela esteja bem trabalhada. Além disso, a perna é uma das partes do corpo que mais tem músculos, e por isso, é importante que ela seja bem trabalhada. Existem vários exercícios para a perna, e cada um deles trabalha uma parte diferente da perna. Além disso, existem exercícios que trabalham a perna de forma mais intensa, e outros que trabalham a perna de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para a perna, e como fazer cada um deles.',
      img: require('./assets/agachamento.jpg'),
      id: 'perna',
      videos: [
        { videoId: 'slw2FJ_cs9I', title: 'Exercício para Perna: Remada com barra' },
        { videoId: 'slw2FJ_cs9I', title: 'Exercício para Perna: Pulldown com barra' },
        { videoId: 'slw2FJ_cs9I', title: 'Exercício para Perna: Pulldown com barra' },
      ],
    },
    {
      muscle: 'Ombro',
      description: 'Exercícios para o ombro são fundamentais para quem deseja ter um corpo mais definido e forte. O ombro é uma das partes do corpo que mais chama a atenção, e por isso, é importante que ele esteja bem trabalhado. Além disso, o ombro é uma das partes do corpo que mais tem músculos, e por isso, é importante que ele seja bem trabalhado. Existem vários exercícios para o ombro, e cada um deles trabalha uma parte diferente do ombro. Além disso, existem exercícios que trabalham o ombro de forma mais intensa, e outros que trabalham o ombro de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para o ombro, e como fazer cada um deles.',
      img: require('./assets/desenvolvimento.jpg'),
      id: 'ombro',
      videos: [
        { videoId: 'SjTJLYXHRL4', title: 'Exercício para Ombro: Remada com barra' },
        { videoId: 'SjTJLYXHRL4', title: 'Exercício para Ombro: Pulldown com barra' },
        { videoId: 'SjTJLYXHRL4', title: 'Exercício para Ombro: Pulldown com barra' },
      ],
    },
    {
      muscle: 'Braço',
      description: 'Exercícios para o braço são fundamentais para quem deseja ter um corpo mais definido e forte. O braço é uma das partes do corpo que mais chama a atenção, e por isso, é importante que ele esteja bem trabalhado. Além disso, o braço é uma das partes do corpo que mais tem músculos, e por isso, é importante que ele seja bem trabalhado. Existem vários exercícios para o braço, e cada um deles trabalha uma parte diferente do braço. Além disso, existem exercícios que trabalham o braço de forma mais intensa, e outros que trabalham o braço de forma mais leve. Por isso, é importante que você saiba quais são os melhores exercícios para o braço, e como fazer cada um deles.',
      img: require('./assets/braco.jpg'),
      id: 'braco',
      videos: [
        { videoId: 'kJfXMTgpEeQ', title: 'Exercício para Braço: Remada com barra' },
        { videoId: 'kJfXMTgpEeQ', title: 'Exercício para Braço: Pulldown com barra' },
        { videoId: 'kJfXMTgpEeQ', title: 'Exercício para Braço: Pulldown com barra' },
      ],
    },
  ];

  const refMusculos = useRef();

  const scrollPeito = () => {
    if (refMusculos.current) {
      const peitoSectionIndex = sections.findIndex(section => section.id === 'peito');
      if (peitoSectionIndex !== -1) {
        const yOffset = peitoSectionIndex * 500; // Altura estimada de cada seção
        refMusculos.current.scrollTo({ y: yOffset, animated: true });
      }
    }
  };



  return (
    <View style={{ backgroundColor: '#000', width: '100%' }}>
      <ScrollView >
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <SafeAreaView>
          <View style={{ alignItems: 'center', backgroundColor: '#000' }}>
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
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Women's Workout</Text>
              <Text style={styles.heroSubtitle}>Te ajudamos a ter o seu corpo dos sonhos</Text>
            </View>

          </View>


          {/* SECTION2 */}

          <View style={styles.section2}>

            <View>
              <View style={styles.lineUnderElement} />
              <Text style={styles.txtSection2}>Selecione o Seu Treino</Text>
            </View>

            <View style={styles.tiposTreino}>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/abdominal.jpg')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Abdomen</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/agachamento.jpg')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Perna</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/desenvolvimento.jpg')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Ombro</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/supino.webp')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Peito</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/costas.webp')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Costas</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTreino}>
                <TouchableOpacity onPress={scrollPeito}>
                  <Image source={require('./assets/braco.jpg')} style={styles.imageRounded} />
                  <Text style={styles.txtTreino}>Braço</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>

              <View>
                <View style={[styles.lineAboveElement, { width: '100%' }]} />
                <Text style={[styles.txtSection2, { textAlign: 'right' }]}>Escolha e comece agora !</Text>
              </View>

            </View>
          </View>


          <BenefitsSection />
          <Alimentacao />



          <ScrollView ref={refMusculos}  >

            <View style={styleMusculos.container}>
              <Text style={styleMusculos.sectionTitle}>Exercícios para Cada Parte do Corpo {'->'}</Text>
              {sections.map((section, index) => (
                <View key={index} style={styleMusculos.muscleSection}>
                  <View style={styleMusculos.titleContainer}>
                    <View style={styleMusculos.imgContainer}>
                      <Image source={section.img} style={styleMusculos.imageRounded} />
                    </View>
                    <Text style={styleMusculos.muscleTitle}>{section.muscle}</Text>
                  </View>
                  <Text style={styleMusculos.muscleDescription}>{section.description}</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styleMusculos.videoContainer}>
                    {section.videos.map((video, videoIndex) => (
                      <View key={videoIndex} style={[styleMusculos.videoItem, styleMusculos.itemWithDivider]}>
                        <YoutubePlayer
                          height={200}
                          width={'100%'}
                          videoId={video.videoId}
                          play={false}
                          onReady={() => console.log('Video pronto para reprodução')}
                          onChangeState={event => console.log(event)}
                          onError={e => console.log(e)}
                          style={styleMusculos.videoPlayer}
                        />
                        <Text style={styleMusculos.videoTitle}>{video.title}</Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={{ alignItems: 'center' }}>
            <View style={{ width: '55%', backgroundColor: '#968e8b', height: 1 }} />
          </View>
          <Footer />

        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  txtWorkouts: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    padding: 2,

  },

  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 20,
    bottom: 200,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  heroSubtitle: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ff4400',
    width: '62%',
    marginBottom: 20,
  },
  viewHeader: {
    width: '100%',
    backgroundColor: '#141312',
  },
  backgroundViewWorkout: {
    backgroundColor: '#c9581b',
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
    fontSize: 22,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#ff4600',
    marginBottom: 10,

  },

  section2: {
    paddingTop: 30,

  },
  txtSection2: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ff4600',
    marginLeft: 10,

  },
  lineAboveElement: {
    height: 1, // Espessura da linha
    width: '56%', // Largura da linha
    backgroundColor: '#ff4600', // Cor da linha
    marginBottom: 10, // Espaço abaixo da linha
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  lineUnderElement: {

    height: 1,
    width: '56%',
    backgroundColor: '#ff4600',
    marginBottom: 10,
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
    fontWeight: '600',
    color: '#ff4400b3',
  },
  imageRounded: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

const styleMusculos = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#ff4600',
  },
  muscleSection: {
    marginBottom: 20,
  },
  muscleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff4600',

  },
  muscleDescription: {
    fontSize: 14,
    marginBottom: 10,
    color: '#ff4600b3',
  },
  videoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 30,

  },
  videoItem: {
    width: 300,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

  },
  itemWithDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ff4600b3',
    paddingBottom: 10,
  },
  videoPlayer: {
    marginBottom: 5,
  },
  videoTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#ff4600b3',

  },
  imgContainer: {
    shadowColor: '#4f240d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  imageRounded: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

});

