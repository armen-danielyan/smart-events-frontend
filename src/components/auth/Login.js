'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { fieldValueChanged, loginUser, cleanForm } from 'actions/AuthActions';
import Input from 'components/common/Input';
import Spinner from 'components/common/Spinner';
import Button from 'components/common/Button';
import CardSection from 'components/common/Card/CardSection';
import Container from 'components/common/Container';
import Avatar from 'components/common/Avatar';

import styles from './styles';

const { loginContainer, errorTextStyle, avatar, submitBtn} = styles;

class Login extends Component {
	componentWillMount() {
    	this.props.cleanForm();
  	}

    onFieldValueChange(text, type) {
        this.props.fieldValueChanged(text, type);
    }

    onButtonPress() {
        const { email, password } = this.props;

        const {redirectPath, params} = this.props;

        this.props.loginUser({ email, password }, redirectPath, params);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" /> ;
        }

        return (
            <View style={submitBtn}>
            	<Button title={'Login'} 
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
        				<Text style = {errorTextStyle}>{this.props.error} </Text>
                    </CardSection>
                    {this.renderButton()}
    			</KeyboardAwareScrollView>
            </Container>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {fieldValueChanged, loginUser, cleanForm })(Login);
