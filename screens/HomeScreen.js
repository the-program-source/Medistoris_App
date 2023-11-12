import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import histories from '../src/images/histories.png';
import Trementinaire from '../src/images/Trementinaire.png';
import Timbaler from '../src/images/timbaler.png';
import Cancons from '../src/images/cancons.png';
import TrackPlayer, { State as TrackPlayerState } from 'react-native-track-player';
import Logo from '../src/images/logo.png'

const HomeScreen = ({ navigation }) => {

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Configura el reproductor de pistas
    setupTrackPlayer();
  }, []);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'intro',
      url: require('../src/audios/Intro.mp3'), // Ajusta la ruta según tu estructura de archivos
      title: 'Intro',
      artist: 'Artista',
    });
  };

  const togglePlayback = async () => {
    const playbackState = await TrackPlayer.getState();

    if (playbackState === TrackPlayerState.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const onPressItem = async () => {
    await togglePlayback();
  };

  return (
    <LinearGradient colors={['#E700F8', '#FBFF80', '#83007F', '#C10075']} style={{ flex: 1 }}>
      <View>
      <TouchableOpacity
          onPress={onPressItem}
          style={{
          }}
        >
          <Text style={{textAlign: "center", fontSize: 40}}>
            Audio bienvenida
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Songs')}
          style={{
            flexDirection: 'row', 
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: 'black',
            borderRadius: 4,
            elevation: 3,
            minHeight: 100,
            maxHeight: 100,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>
            Totes les cancons
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Llegenda')}
          style={{
            flexDirection: 'row', 
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: 'black',
            borderRadius: 4,
            elevation: 3,
            minHeight: 100,
            maxHeight: 100,
            paddingHorizontal: 10,
          }}
        >
          <Image style={{ height: 75, width: 75 }} source={Timbaler} />
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>
            1. Llegendes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Histories')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: 'black',
            borderRadius: 10,
            elevation: 3,
            minHeight: 100,
            maxHeight: 100,
            paddingHorizontal: 10,
          }}
        >
          <Image style={{ height: 75, width: 75 }} source={histories} />
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>
            2. Histories
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cancons')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: 'black',
            borderRadius: 4,
            elevation: 3,
            minHeight: 100,
            maxHeight: 100,
            paddingHorizontal: 10,
          }}
        >
          <Image style={{ height: 75, width: 75 }} source={Cancons} />
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>
            3. Cançons
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Dites')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: 'black',
            borderRadius: 4,
            elevation: 3,
            minHeight: 100,
            maxHeight: 100,
            paddingHorizontal: 10,
          }}
        >
          <Image style={{ height: 75, width: 75 }} source={Trementinaire} />
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>
            4. Dites
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
