import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from '../components/Button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import COLORS from '../constants/colors';

function LoginScreen( {navigation} ) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password) 
      .then((authUser) => {
        navigation.navigate('Medistoris');
      })
      .catch((error) => alert(error.message));
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: COLORS.black
                }}>
                    Inicia sessió
                </Text>


                <Text style={{
                    fontSize: 16,
                    color: COLORS.black
                }}>Ens alegrem de tornar-te a veure 👋</Text>
            </View>


            <View style={{ marginBottom: 12, marginTop: 20 }}>


                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text) => setEmail(text.toLowerCase())}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>


            <View style={{ marginBottom: 12, marginTop: 20 }}>


                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder='Contrasenya'
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: "100%"
                        }}
                    />


                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            right: 12
                        }}
                    >
                        {
                            isPasswordShown == true ? (
                                <Ionicons name="eye-off" size={24} color={COLORS.black} />
                            ) : (
                                <Ionicons name="eye" size={24} color={COLORS.black} />
                            )
                        }


                    </TouchableOpacity>
                </View>
            </View>


            <View style={{
                flexDirection: 'row',
                marginVertical: 6
            }}>
                <Checkbox
                    style={{ marginRight: 8 }}
                    onValueChange={setIsChecked}
                    color={isChecked ? COLORS.primary : undefined}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />


                <Text>Recordem</Text>
            </View>


            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22
            }}>
                <Pressable
                    onPress={() => navigation.navigate("Reset")}
                >
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.primary,
                        fontWeight: "bold",
                        marginLeft: 6
                    }}>Restablir la contrasenya</Text>
                </Pressable>
            </View>


            <Button
                title="Inicia sesió"
                filled
                onPress={signIn}
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
            />


            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: COLORS.grey,
                        marginHorizontal: 10
                    }}
                />
                <Text style={{ fontSize: 14 }}>O inicia sesió amb</Text>
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: COLORS.grey,
                        marginHorizontal: 10
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>


                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 52,
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        marginRight: 4,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={require("../src/images/google.png")}
                        style={{
                            height: 36,
                            width: 36,
                            marginRight: 8
                        }}
                        resizeMode='contain'
                    />


                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 52,
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        marginRight: 4,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={require("../src/images/apple.png")}
                        style={{
                            height: 50,
                            width: 50,
                            marginRight: 8
                        }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 52,
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        marginRight: 4,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={require("../src/images/facebook.png")}
                        style={{
                            height: 36,
                            width: 36,
                            marginRight: 8
                        }}
                        resizeMode='contain'
                    />


                </TouchableOpacity>
            </View>


            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22
            }}>
                <Text style={{ fontSize: 16, color: COLORS.black }}>No tens compte</Text>
                <Pressable
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.primary,
                        fontWeight: "bold",
                        marginLeft: 6
                    }}>Crea compte</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
)
}


export default LoginScreen;
