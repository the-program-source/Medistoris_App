import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import TrackPlayer, {State} from 'react-native-track-player';

const SongPlayer = ({
  songsList,
  currentIndex,
  progress,
  playbackState,
  isVisible,
  onClose,
  onChange
}) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(currentIndex);
  const [isPlaying, setIsPlaying] = useState(false); // Agrega un estado para el estado de reproducción

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying); // Cambia el estado de reproducción
  };

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} onSwipeComplete={onClose}>
      <LinearGradient
        colors={['#E700F8', '#FBFF80', '#83007F', '#C10075']}
        style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 20 }}
          onPress={() => {
            onClose();
          }}>
          <Image
            source={require('./src/images/down-arrow.png')}
            style={{
              marginTop: 50,
              width: 30,
              height: 30,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: songsList[currentSongIndex].artwork }}
          style={{
            width: '80%',
            height: '35%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: '600',
            marginLeft: 20,
            marginTop: 70,
          }}>
          {songsList[currentSongIndex].title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: '600',
            marginLeft: 20,
          }}>
          {songsList[currentSongIndex].artist}
        </Text>
        
        <Slider
          style={{
            width: '90%',
            height: 40,
            alignSelf: 'center',
            marginTop: 20,
          }}
          minimumValue={0}
          maximumValue={progress.duration} 
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#fff"
          onSlidingComplete={async (value) => {
            const seconds = Math.floor(value);
            await TrackPlayer.seekTo(seconds);
          }}
        />

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Text style={{ color: 'white' }}>{format(progress.position)}</Text>
          <Text style={{ color: 'white' }}>{format(progress.duration)}</Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={async () => {
              if (currentSongIndex > 0) {
                await TrackPlayer.skip(currentSongIndex - 1);
                await TrackPlayer.play();
                setCurrentSongIndex(currentSongIndex - 1);
                onChange(currentSongIndex - 1);
                setIsPlaying(true); // Establece el estado de reproducción a true
              }
            }}>
            <Image
              source={require('./src/images/previous.png')}
              style={{ width: 35, height: 35, tintColor: 'white' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={togglePlayback}>
            <Image
              source={
                isPlaying
                  ? require('./src/images/pause2.png')
                  : require('./src/images/play.png')
              }
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await TrackPlayer.skip(currentSongIndex + 1);
              await TrackPlayer.play();
              setCurrentSongIndex(currentSongIndex + 1);
              onChange(currentSongIndex + 1);
              setIsPlaying(true); // Establece el estado de reproducción a true
            }}>
            <Image
              source={require('./src/images/next.png')}
              style={{ width: 35, height: 35, tintColor: 'white' }}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default SongPlayer;
