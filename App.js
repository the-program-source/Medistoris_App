import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Histories from './screens/Histories';
import Llegendes from './screens/Llegendes';
import Dites from './screens/Dites';
import CanconsPopulars from './screens/CanconsPopulars';
import Welcome from './screens/Welcome';
import Politica from './screens/Politica';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import ResetPassword from './screens/ResetPassword';
import Songs from './screens/Songs';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#E700F8',
    shadowOpacity: 0,
    elevation: 0,
    borderColor: '#E700F8'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    color: 'white', // Establece el color del título
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Politica"
            component={Politica}
            options={{
              title: "Política de privacitat"
            }}
          />
        <Stack.Screen name="Medistoris" component={HomeScreen} />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: "Inicia sesió"
          }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} 
          options={{
            title: "Registra't"
          }}
        />
        <Stack.Screen name="Reset" component={ResetPassword} 
          options={{
            title: "Restablir la contrasenya"
          }}
        />
        <Stack.Screen name="Histories" component={Histories} />
        <Stack.Screen name="Llegenda" component={Llegendes} />
        <Stack.Screen name="Dites" component={Dites} />
        <Stack.Screen 
          name="Cancons" 
          component={CanconsPopulars} 
          options={{
            title: "Cançons"
          }}
        />
        <Stack.Screen 
          name="Songs" 
          component={Songs} 
          options={{
            title: "Totes les cançons"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
