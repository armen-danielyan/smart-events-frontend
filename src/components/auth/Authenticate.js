'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export function requireAuthentication(Component) {

    class Authenticate extends Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuth);
        };

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuth);
        };

        checkAuth (isAuth) {
            if (!isAuth) {
                Actions.pop(2);
            	Actions.login({redirectPath: this.props.name});
            }
        };

        render () {
            return (
                <View style={{flex: 1 }}>
                    {this.props.isAuth === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </View>
            )

        };
    }

    const mapStateToProps = ({auth}) => ({
        token: auth.token,
        user: auth.user,
        isAuth: auth.isAuth
    });

    return connect(mapStateToProps)(Authenticate);
}