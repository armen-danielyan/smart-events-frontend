import React, { PropTypes, Component} from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BackButton from 'components/common/BackButton';

import styles from './styles';

const propTypes = {
	navigationState: PropTypes.object
};

const backButtonImage = require('assets/images/back.png');
const searchImage = require('assets/images/search.png');
const menuButtonImage = require('assets/images/menu.png');
const headerBg = require('assets/images/header.png');
const logo = require('assets/images/logo.png');

class NavBarCustom extends Component {

	constructor(props) {
		super(props);

		this.renderRightButton = this.renderRightButton.bind(this);
		this.renderSecRightButton = this.renderSecRightButton.bind(this);
		this.renderBackButton = this.renderBackButton.bind(this);
		this.renderLeftButton = this.renderLeftButton.bind(this);
		this.renderTitle = this.renderTitle.bind(this);
	}

	renderBackButton() {
		const state = this.props.navigationState;
		const childState = state.children[state.index];
		const style = [
			styles.backButton,
			this.props.leftButtonStyle,
			state.leftButtonStyle,
			childState.leftButtonStyle,
		];

		if (state.index === 0 && (!state.parentIndex || state.parentIndex === 0)) {
			return null;
		}

		let onPress = childState.onBack || childState.component.onBack;
		if (onPress) {
			onPress = onPress.bind(null, state);
		} else {
			onPress = Actions.pop;
		}
		return (
			<TouchableOpacity
				style={styles.backButton}
				testID="backNavButton"
				onPress={onPress}>
				{!childState.hideBackImage }
				<BackButton />
			</TouchableOpacity>
		);
	}

	renderRightButton(navProps) {
		const tryRender = (state, wrapBy) => {
			if (!state) {
				return null;
			}
			const rightBtnSource = <Image source={searchImage} 
				style={styles.menuIcon}/>;

			if (state.onRight) {
				const onPress = state.onRight.bind(null, state);
				return (
					<TouchableOpacity
						style={styles.rightButton}
						onPress={onPress} >
						{rightBtnSource}
					</TouchableOpacity>
				);
			}
			return null;
		}
		return tryRender(this.props.component, this.props.wrapBy)  
			|| tryRender(this.props);
	}

	renderSecRightButton(navProps) {
		const tryRender = (state, wrapBy) => {
			if (!state) {
				return null;
			}
			const secRightBtnSource = <Image source={state.secondRight} 
				style={styles.menuIcon}/>;

			if (state.secondRight) {

				const onPress = state.onSecondRight.bind(null, state);
				return (
					<TouchableOpacity
						style={[styles.rightButton, {right: 37}]}
						onPress={onPress} >
						{secRightBtnSource}
					</TouchableOpacity>
				);
			}
			return null;
		}
		return tryRender(this.props.component, this.props.wrapBy)  
			|| tryRender(this.props);
	}

	renderLeftButton(navProps, styleChange) {
		const tryRender = (state, wrapBy) => {
			let onPress = state.onLeft;
			const {leftButton, menuIcon, defaultImageStyle} = styles;
			const leftTitle = <Image 
				source={menuButtonImage} style={[styles.menuIcon, {left: styleChange}]}/>;

			if (onPress) {
				onPress = onPress.bind(null, state);
				return (
					<TouchableOpacity
						style={styles.leftButton}
						onPress={onPress} >
								{leftTitle}
					</TouchableOpacity>
				);
			}      
			return null;
		}
		return tryRender(this.props);
	}

	renderTitle(childState, index:number) {
		let title = this.props.getTitle ? this.props.getTitle(childState) : childState.title;
		if (title === undefined && childState.component && childState.component.title) {
			title = childState.component.title;
		}

		const animationStyles = {
			opacity: this.props.position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [0, this.props.titleOpacity, 0],
			}),
			left: this.props.position.interpolate({
				inputRange: [index - 1, index + 1],
				outputRange: [280, -280],
			}),
			right: this.props.position.interpolate({
				inputRange: [index - 1, index + 1],
				outputRange: [-280, 280],
			}),
		};

		return (
			<Animated.View
				key={childState.key}
				style={[ styles.titleWrapper]}>
					{(childState.name == 'eventFeed')?
					(<Animated.Image source={logo} style={[styles.logo, 
						animationStyles]} />):(
					<Animated.Text
						lineBreakMode="tail"
						numberOfLines={1}
						{...this.props.titleProps}
						key={childState.key}
						style={[
							styles.title,
							this.props.titleStyle,
							this.props.navigationState.titleStyle,
							childState.titleStyle,
							animationStyles]}>
						{title}
						</Animated.Text>)}
					</Animated.View>
		);
	}

	render() {
		let state = this.props.navigationState;
		const navProps = { ...this.props };

		const renderSearchButton = this.renderSearchButton;
		const renderTitle = this.props.renderTitle;

		 const LeftBtnMargin = ()=>{
			if(this.renderBackButton(navProps)) {
				//return this.renderLeftButton(navProps, 30);

			} else {
				return this.renderLeftButton(navProps, 2)
			}
		 };

		return (
			<View
				style={[
					styles.header,
					styles.headerSimple,
					this.props.navigationBarStyle,
					state.navigationBarStyle
				]}>
				<Image source={headerBg} style={styles.headerImage}>
					{renderTitle ? renderTitle(navProps) : 
						state.children.map(this.renderTitle, this)}        
					{LeftBtnMargin()}
					{this.renderBackButton(navProps)}
					{this.renderSecRightButton(navProps)}
					{this.renderRightButton(navProps)}
				</Image>
			</View>
		);
	}
}

NavBarCustom.propTypes = propTypes;

export default NavBarCustom;