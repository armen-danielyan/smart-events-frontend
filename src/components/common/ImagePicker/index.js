import React, { Component } from 'react';
import { View, Text,  Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';

class ImagePickerComp extends Component {
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
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
              avatarSource: source
            });
        }
    });
  };

  render() {
    let imageUri = this.state.avatarSource || this.props.initialValue || null;
    return (
     	<View style={{zIndex: -1, marginTop: 20}}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View style={[styles.avatar, styles.avatarContainer, 
                		{marginBottom: 20, justifyContent: 'center'}]}>
                    {imageUri === null ? 
                    	<Text style={{color: '#002C95', alignSelf: 'center',
                             padding: 10, borderWidth: 1}}>
                    		{this.props.btnTitle}</Text> :
                        <Image source={{uri: imageUri.uri}} 
                        style={{width: null, height: 150, resizeMode: 'stretch'}}/>}
                </View>
            </TouchableOpacity>
      </View>
    );
  }
}

export default ImagePickerComp;