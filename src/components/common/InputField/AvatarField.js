import React, { Component } from 'react';
import { View, Text,  Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';

class Avatar extends Component {
    state = {
        avatarSource: null
    };



    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.props.imageSelected(
                    {
                        uri: response.data,
                        name: response.fileName,
                        type: 'image/jpg'
                    }
                );

                this.setState({
                    avatarSource: source
                });
            }
        });
    };

    render() {
        let imageUri = this.state.avatarSource || this.props.initialValue || null;
        const blankAvatar = require('../../../assets/images/avatar.png');
        const { avatar } = styles;
        return (
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}
                              style={{zIndex: 1000, position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>

                    <Image source={imageUri === null ? blankAvatar : {uri: imageUri.uri}}
                           style={avatar}/>
            </TouchableOpacity>
        );
    }
}

export default Avatar;