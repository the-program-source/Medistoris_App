import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import histories from '../src/images/histories.png';
import Trementinaire from '../src/images/Trementinaire.png'
import Timbaler from '../src/images/timbaler.png';
import Cancons from '../src/images/cancons.png'
import Cancons2 from '../src/images/cancons2.png'

const HomeScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null, // Elimina el botón de "Atrás"
    });
  }, [navigation]);
  
  return (
    <LinearGradient
      colors={['#E700F8', '#FBFF80', '#83007F', '#C10075']}
      style={{flex: 1}}>
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Histories')}
        style={{
          flexDirection: "row",
          alignItems: "center", // Alinea verticalmente en el centro
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "black",
          borderRadius: 10,
          elevation: 3,
          minHeight: 100,
          maxHeight: 100,
          paddingHorizontal: 10,
        }}
      >
        <Image
          style={{ height: 75, width: 75 }}
          source={histories}
        />

        <Text
          style={{ fontSize: 13, fontWeight: "bold", color: "white", marginLeft: 30 }}
        >
          1. Histories
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate('Trementinaire')}
        style={{
          flexDirection: "row",
          alignItems: "center", // Alinea verticalmente en el centro
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "black",
          borderRadius: 4,
          elevation: 3,
          minHeight: 100,
          maxHeight: 100,
          paddingHorizontal: 10, // Agrega espacio entre la imagen y el texto
        }}
      >
        <Image
          style={{ height: 75, width: 75 }}
          source={Trementinaire}
        />

        <Text
          style={{ fontSize: 13, fontWeight: "bold", color: "white", marginLeft: 30 }}
        >
          2. Trementinaire
        </Text>
      </TouchableOpacity>

      <View 
        style={{
          paddingHorizontal: 22,
          width: "100%"
        }}
      >
        <Image
          source={require("../src/images/logo2.png")}
          style={{
            height: 210,
            width: 400,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Llegenda')}
        style={{
          flexDirection: "row",
          alignItems: "center", // Alinea verticalmente en el centro
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "black",
          borderRadius: 4,
          elevation: 3,
          minHeight: 100,
          maxHeight: 100,
          paddingHorizontal: 10, // Agrega espacio entre la imagen y el texto
        }}
      >
        <Image
          style={{ height: 75, width: 75 }}
          source={Timbaler}
        />

        <Text
          style={{ fontSize: 13, fontWeight: "bold", color: "white", marginLeft: 30 }}
        >
          3. Llegenda del Timbaler
        </Text>
      </TouchableOpacity>

      

      <TouchableOpacity
        onPress={() => navigation.navigate('Dites')}
        style={{
          flexDirection: "row",
          alignItems: "center", // Alinea verticalmente en el centro
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "black",
          borderRadius: 4,
          elevation: 3,
          minHeight: 100,
          maxHeight: 100,
          paddingHorizontal: 10, // Agrega espacio entre la imagen y el texto
        }}
      >
        <Image
          style={{ height: 75, width: 75 }}
          source={Trementinaire}
        />

        <Text
          style={{ fontSize: 13, fontWeight: "bold", color: "white", marginLeft: 30 }}
        >
          4. Dites
        </Text>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Cancons')}
        style={{
          flexDirection: "row",
          alignItems: "center", // Alinea verticalmente en el centro
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "black",
          borderRadius: 4,
          elevation: 3,
          minHeight: 100,
          maxHeight: 100,
          paddingHorizontal: 10, // Agrega espacio entre la imagen y el texto
        }}
      >
        <Image
          style={{ height: 75, width: 75 }}
          source={Cancons}
        />
        <Image
          style={{ height: 75, width: 75 }}
          source={Cancons2}
        />

        <Text
          style={{ fontSize: 13, fontWeight: "bold", color: "white", marginLeft: 30 }}
        >
          5. Cançons populars
        </Text>
      </TouchableOpacity>
      
    </View>
    </LinearGradient>
  );
};

export default HomeScreen;
