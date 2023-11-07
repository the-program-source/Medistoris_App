import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import COLORS from '../constants/colors';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import the function for sending reset password email

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email); // Send the reset password email
      Alert.alert('Email Sent', 'Check your email for password reset instructions.');
      navigation.navigate('Login'); // Navigate to the login screen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>Restablecer Contraseña</Text>
        <Text style={styles.description}>
          Introduzca su correo electrónico para recibir instrucciones de restablecimiento de contraseña.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
        </View>

        <Button
          title="Continuar"
          filled
          onPress={handleResetPassword}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    marginTop: 20,
  },
  input: {
    width: '100%',
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
});

export default ResetPassword;
