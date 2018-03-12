'use strict';

import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, 
	secureTextEntry, numberOfLines, keyboardType}) => {
	const { inputStyle, labelStyle, containerStyle, multiLine } = styles;

	return (
		<View style={containerStyle}>
			<Text style={styles.placeholderStyle}>
				{placeholder}
			</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				autoCapitalize={'none'}
				style={[inputStyle, (numberOfLines)?multiLine: {}]}
				value={value}
				multiline={(numberOfLines)?true:false}
				numberOfLines = {numberOfLines}
				keyboardType={keyboardType || 'default'}
				onChangeText={onChangeText} />
		</View>
	);
};

export default Input;