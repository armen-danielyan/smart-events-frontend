'use strict';

import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

const InputField = ({ label, initialValue, onChangeText, secureTextEntry, hr }) => {
	const { labelStyle, inputStyle, containerStyle, separator } = styles;
	const sep = hr ? separator : '';


	return (
		<View style={[containerStyle, sep]}>
            <Text style={labelStyle}>{label}</Text>
			<TextInput
				underlineColorAndroid='transparent'
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				autoCapitalize={'none'}
				style={inputStyle}
				value={initialValue}
				keyboardType={'default'}
				onChangeText={onChangeText} />
		</View>
	);
};

export default InputField;