import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';

export default function Politica({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Política de privacitat</Text>
      <Text style={styles.paragraph}>
        1. El vostre accés als Serveis
        Ningú menor de 13 anys no pot utilitzar ni accedir 
        als Serveis. Podem oferir Serveis addicionals que
        requereixin que siguis més gran per utilitzar-los,
        així que si us plau, llegiu tots els avisos i les
        Condicions addicionals amb atenció quan 
        accediu als Serveis.
      </Text>
      <Text style={styles.paragraph}>
        2. El vostre accés als Serveis
        Ningú menor de 13 anys no pot utilitzar ni accedir 
        als Serveis. Podem oferir Serveis addicionals que
        requereixin que siguis més gran per utilitzar-los,
        així que si us plau, llegiu tots els avisos i les
        Condicions addicionals amb atenció quan 
        accediu als Serveis.
      </Text>
      <Text style={styles.paragraph}>
        3 El vostre accés als Serveis
        Ningú menor de 13 anys no pot utilitzar ni accedir 
        als Serveis. Podem oferir Serveis addicionals que
        requereixin que siguis més gran per utilitzar-los,
        així que si us plau, llegiu tots els avisos i les
        Condicions addicionals amb atenció quan 
        accediu als Serveis.
      </Text>
      <Text style={styles.paragraph}>
        4 El vostre accés als Serveis
        Ningú menor de 13 anys no pot utilitzar ni accedir 
        als Serveis. Podem oferir Serveis addicionals que
        requereixin que siguis més gran per utilitzar-los,
        així que si us plau, llegiu tots els avisos i les
        Condicions addicionals amb atenció quan 
        accediu als Serveis.
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: 6 }}>
        <Checkbox
          style={{ marginRight: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text>Acceptes la nostra política de privacitat</Text>
      </View>

      <Button
        title="Registra't"
        onPress={() => {
          if (isChecked) {
            navigation.navigate("Signup");
          } else {
            alert("Has d'acceptar la política de privacitat")
          }
        }}
        style={{
          marginTop: 22,
          width: "100%",
        }}
        disabled={!isChecked}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
    marginBottom: 15,
  },
});
