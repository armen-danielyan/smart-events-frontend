'use strict';

import React, { Component } from 'react';
import { View, Text, Label, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getProfile, updateProfile, profileFieldChanged } from 'actions/ProfileActions';
import config from 'config';
import InputField from 'components/common/InputField';
import Button from 'components/common/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Location from 'components/common/InputField/LocationField';
import Avatar from 'components/common/InputField/AvatarField';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './styles';
const {
    body,
    container,
    avatarWrap,
    section,
    manageInterests,
    titleInterests,
    addInterests,
    userInterestsItems,
    userInterestsItem
} = styles;

class EditProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getProfile();
    };

    saveEventData = () => {
        this.props.updateProfile({ id: this.props.user.id, ...this.props.accountData });
    };

    onFieldValueChange(text, type) {
        this.props.profileFieldChanged(text, type);
    };

    render() {
        const user = this.props.accountData;
        const imageSrc = (user.image)? ({uri: config.HOST + 'profiles/' + user.image}): null;
        return (
            <ScrollView style={body}>
                <KeyboardAwareScrollView ref='scroll' extraHeight={200} enableResetScrollToCoords={true}>
                    <View style={container}>

                        <Avatar btnTitle={'Change Profile Picture'}
                                initialValue = {imageSrc}
                                imageSelected = {this.onFieldValueChange.bind(this, 'image')}/>

                        <View style={avatarWrap}></View>

                        <View style={section}>
                            <InputField label="First Name"
                                        initialValue={user.firstName}
                                        hr={true}
                                        onChangeText = {this.onFieldValueChange.bind(this, 'firstName')}/>

                            <InputField label="Last Name"
                                        initialValue={user.lastName}
                                        hr={true}
                                        onChangeText = {this.onFieldValueChange.bind(this, 'lastName')}/>

                            <InputField label="Username"
                                        initialValue={user.username}
                                        hr={true}
                                        onChangeText = {this.onFieldValueChange.bind(this, 'username')}/>

                            <InputField label="e-mail"
                                        initialValue={user.email}
                                        hr={true}/>

                            <InputField label="Phone Number"
                                        initialValue='+1234567890'
                                        hr={true}/>

                            <Location label="Location"
                                      initialValue={user.location}
                                      dataSelected = {this.onFieldValueChange.bind(this, 'location')}/>

                        </View>

                        <View style={section}>
                            <InputField label="Password"
                                        initialValue='password'
                                        hr={true}
                                        secureTextEntry/>
                            <InputField label="New Password"
                                        initialValue='password'
                                        hr={true}
                                        secureTextEntry/>
                            <InputField label="Retype Password"
                                        initialValue='password'
                                        secureTextEntry/>
                        </View>

                        <View style={section}>
                            <View style={manageInterests}>
                                <Text style={titleInterests}>Interests</Text>
                                <TouchableOpacity style={addInterests}>
                                    <Icon name='plus' size={16} style={{textAlign: 'right'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={[userInterestsItems, {paddingBottom: 10}]}>
                                <Text style={userInterestsItem}>Art</Text>
                                <Text style={userInterestsItem}>Fitness</Text>
                                <Text style={userInterestsItem}>Music</Text>
                                <Text style={userInterestsItem}>Health</Text>
                                <Text style={userInterestsItem}>Technology</Text>
                                <Text style={userInterestsItem}>Business</Text>
                                <Text style={userInterestsItem}>Science</Text>
                                <Text style={userInterestsItem}>Home</Text>
                                <Text style={userInterestsItem}>Outdoor</Text>
                                <Text style={userInterestsItem}>Photography</Text>
                            </View>
                        </View>

                    </View>
                </KeyboardAwareScrollView>

                <View style={{height: 60, justifyContent: 'center'}}>
                    <Button title='SAVE' onPress={this.saveEventData.bind(this)}/>
                </View>
            </ScrollView>

        );
    };
}

const mapStateToProps = ({profile}) => {
    const { accountData } = profile;

    return { accountData };
};

export default connect(mapStateToProps, { getProfile, updateProfile, profileFieldChanged })(EditProfile);