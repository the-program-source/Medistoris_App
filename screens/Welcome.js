import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FBFF80'
            }}
            
        >
            <View style={{ flex: 1 }}>
                <View>

                    
                </View>


                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 250,
                    width: "100%"
                }}>
                    <Image
                        source={require("../src/images/logo2.png")}
                        style={{
                            height: 210,
                            width: 400,
                        }}
                    />
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 23,
                            color: COLORS.black,
                            marginVertical: 4,
                            textAlign: "center"
                        }}>Tarranà Català Immersiva</Text>
                    </View>

                    <Button
                        title="Registra't"
                        onPress={() => navigation.navigate("Politica")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Ets usuari?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.blue,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Inicia Sesió</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Welcome