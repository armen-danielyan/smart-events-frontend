'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { fieldValueChanged, registerUser, cleanForm } from 'actions/AuthActions';
import Input from 'components/common/Input';
import Spinner from 'components/common/Spinner';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import CardSection from 'components/common/Card/CardSection';
import Avatar from 'components/common/Avatar';

import styles from './styles';

const { loginContainer, errorTextStyle, avatar, submitBtn} = styles;

class Register extends Component {
	componentWillMount() {
    	this.props.cleanForm();
  	}

    onFieldValueChange(text, type) {
        this.props.fieldValueChanged(text, type);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.registerUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" /> ;
        }

        return (
            <View style={submitBtn}>
                <Button title={'Sign up'} 
                    onPress={this.onButtonPress.bind(this)}
                    type='primary' />
            </View>
        );
    }
    render() {
        return (
            <Container>
            	 <KeyboardAwareScrollView ref='scroll' extraHeight={200} 
                        enableResetScrollToCoords={true} style={loginContainer}
                        contentContainerStyle={{justifyContent: 'center'}}>
                    <Avatar type='default' style={avatar}/>
                    <CardSection style={{paddingTop: 10}}>
        	            <Input 
        		     		placeholder = "Email"
        		            onChangeText = {this.onFieldValueChange.bind(this, 'email')}
                            keyboardType='email-address'
        		            value = {this.props.email}/>
        	            <Input secureTextEntry
        		            placeholder = "Password"
        		            onChangeText = {this.onFieldValueChange.bind(this, 'password')}
        		            value = {this.props.password} />
        		         <Input secureTextEntry
        		            placeholder = "Password Confirmation"
        		            onChangeText = {this.onFieldValueChange.bind(this, 'passwordConfirm')}
        		            value = {this.props.passwordConfirm} />
        				<Text style = {errorTextStyle}>{this.props.error} </Text>
                    </CardSection>
                    {this.renderButton()} 
    			</KeyboardAwareScrollView>   
            </Container>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, passwordConfirm, error, loading } = auth;

    return { email, password, passwordConfirm, error, loading };
};

export default connect(mapStateToProps, {fieldValueChanged, registerUser, cleanForm })(Register);
