import {
  View,
  Text,
  Image,
  StatusBar,
  Touchable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { songsList } from '../src/SongsDites';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import Modal from 'react-native-modal';
import SongPlayer from '../SongPlayer';


const Dites = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      console.log('Configurando TrackPlayer...');
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(songsList);
      console.log('TrackPlayer configurado con éxito');
    } catch (e) {
      console.log('Error en la configuración de TrackPlayer:', e);
    }
  };

  useEffect(() => {
    if (State.Playing === playbackState) {
      if (progress.position.toFixed(0) === progress.duration.toFixed(0)) {
        if (currentIndex < songsList.length) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  }, [progress]);


  return (
    <LinearGradient
    colors={['#E700F8', '#FBFF80', '#83007F', '#C10075']}
      style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      
     
      
      <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
        <Text style={{color: 'white', fontSize: 14, marginLeft: 10}}>
         Dites
        </Text>
      </View>
      
     
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginTop: 10,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={async () => {
              if (State.Playing == playbackState) {
                await TrackPlayer.pause();
              } else {
                await TrackPlayer.skip(currentIndex);
                await TrackPlayer.play();
              }
            }}>
            {State.Playing == playbackState ? (
              <Image
                source={require('../src/images/pause.png')}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 20,
                  marginRight: 10,
                  tintColor: '#3ad934',
                }}
              />
            ) : (
              <Image
                source={require('../src/images/play-button.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 20,
                  marginRight: 10,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={songsList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
              onPress={async () => {
                await TrackPlayer.pause();
                await TrackPlayer.skip(index);
                await TrackPlayer.play();
                setCurrentIndex(index);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: item.artwork}}
                  style={{width: 50, height: 50, borderRadius: 5}}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'white'}}>{item.title}</Text>
                  <Text style={{color: 'white', fontSize: 10}}>
                    {item.artist}
                  </Text>
                </View>
                {index == currentIndex && State.Playing == playbackState && (
                  <Image
                    source={require('../src/images/playing.png')}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: 'white',
                      marginLeft: 20,
                    }}
                  />
                )}
              </View>
              <Image
                source={require('../src/images/option.png')}
                style={{width: 18, height: 18, tintColor: '#bababa'}}
              />
            </TouchableOpacity>
          );
        }}
      />

<TouchableOpacity
    activeOpacity={1}
    style={{
      width: '100%',
      height: 70,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    }}
    onPress={() => {
      setIsVisible(true);
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={{ uri: songsList[currentIndex].artwork }}
        style={{ width: 50, height: 50, borderRadius: 5 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'white' }}>
          {songsList[currentIndex].title}
        </Text>
        <Text style={{ color: 'white', fontSize: 10 }}>
          {songsList[currentIndex].artist}
        </Text>
      </View>
    </View>

    <TouchableOpacity
      onPress={async () => {
        if (State.Playing === playbackState) {
          await TrackPlayer.pause();
        } else {
          await TrackPlayer.skip(currentIndex);
          await TrackPlayer.play();
        }
      }}
    >
      <Image
        source={
          State.Playing === playbackState
            ? require('../src/images/pause2.png')
            : require('../src/images/play.png')
        }
        style={{ width: 30, height: 30, tintColor: 'white' }}
      />
    </TouchableOpacity>
  </TouchableOpacity>

      
      <SongPlayer
      isVisible={isVisible}
        songsList={songsList}
        currentIndex={currentIndex}
        playbackState={playbackState}
        progress={progress}
        onChange={(x)=>{
          setCurrentIndex(x)
        }}
        onClose={()=>{
          setIsVisible(false)
        }}
      />
    </LinearGradient>
  );
};

export default Dites;

//'#a34c0d', '#592804', '#241001', '#000000'
