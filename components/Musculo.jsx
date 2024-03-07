import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const MuscleSection = () => {
 // Exemplo de vídeos e descrições para cada parte muscular
 const sections = [
    {
      muscle: 'Peito',
      videos: [
        { videoId: 'jzD_yyEcp0M', description: 'Exercício para peito: Press de banco' },
        { videoId: 'videoID2', description: 'Exercício para peito: Press inclinado' },
      ],
    },
    {
      muscle: 'Costas',
      videos: [
        { videoId: 'videoID3', description: 'Exercício para costas: Remada com barra' },
        { videoId: 'videoID4', description: 'Exercício para costas: Pulldown com barra' },
      ],
    },
    // Adicione mais partes musculares conforme necessário
 ];

 return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.muscleSection}>
          <Text style={styles.muscleTitle}>{section.muscle}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.videoContainer}>
            {section.videos.map((video, videoIndex) => (
              <View key={videoIndex} style={[styles.videoItem, videoIndex < section.videos.length - 1 ? styles.itemWithDivider : {}]}>
                <YoutubePlayer
                 height={200}
                 width={'100%'}
                 videoId={video.videoId}
                 play={false}
                 onReady={() => console.log('Video pronto para reprodução')}
                 onChangeState={event => console.log(event)}
                 onError={e => console.log(e)}
                 style={styles.videoPlayer}
                />
                <Text style={styles.videoDescription}>{video.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    padding: 20,
 },
 muscleSection: {
    marginBottom: 20,
 },
 muscleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 videoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
 },
 videoItem: {
    marginRight: 10,
    borderBottomWidth: 1, // Adiciona uma linha na parte inferior de cada item
    borderBottomColor: '#ddd', // Define a cor da linha
    paddingBottom: 10, // Adiciona espaço abaixo da linha
 },
 itemWithDivider: {
    borderBottomWidth: 1, // Adiciona uma linha na parte inferior do último item
    borderBottomColor: '#ddd', // Define a cor da linha
    paddingBottom: 10, // Adiciona espaço abaixo da linha
 },
 videoPlayer: {
    marginBottom: 5,
 },
 videoDescription: {
    fontSize: 14,
    marginBottom: 10,
 },
});

export default MuscleSection;
