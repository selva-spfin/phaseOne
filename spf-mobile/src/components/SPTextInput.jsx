import { colors } from '../constants/colors';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const SPTextInput = ({ label, value, onChangeText, error, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <View style={styles.container}>
            {isFocused && <Text style={[styles.label]}>{label}</Text>
            }
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                placeholder={isFocused ? '': label}
                placeholderTextColor={'#000'}
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 2,
    },
    label: {
        color: '#000',
        fontSize: 12,
        position: 'relative',
        top: 10,
        zIndex: 1,
        left:0
    },
    labelFocused: {
        color: colors.pink,
        marginLeft: 10
    },
    input: {
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: '#DDD',
        fontSize: 14,
        color: '#000'
    },
    inputError: {
        borderColor: '#E53935', // Error border color
    },
    error: {
        color: '#E53935', // Error text color
        fontSize: 14,
        marginTop: 4,
    },
});

export default SPTextInput;
