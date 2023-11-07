import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = (props) => {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#E700F8",
                borderRadius: 15,
                paddingBottom: 16,
                paddingVertical: 10,
                alignItems: 'center', 
                marginBottom: 20,
                marginTop: 20
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, color: "white" }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
