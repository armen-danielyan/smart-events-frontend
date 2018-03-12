'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';

import styles from './styles.js';


class ImagePreload  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageLoaded: false,
        };
    };

    changeImage() {
        this.setState({isImageLoaded: true});
    };

    renderPlaceholderImage() {
        if (!this.state.isImageLoaded) {
            let placeholder = require('assets/images/placeholder.png');            
            return (
                <Image
                    style={styles.image}
                    source={placeholder}/>
            );
        }
        return null;
    };
    
    render() {
        return (
            <Image
                onLoad={this.changeImage.bind(this)}
                style={[styles.image, this.props.style || null]}
                source={{uri: this.props.imagePath}}>
                {this.renderPlaceholderImage()}
            </Image>
        );
    };
}

export default ImagePreload;