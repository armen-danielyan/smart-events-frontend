'use strict';

import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';

import { Actions, DefaultRenderer } from 'react-native-router-flux';
import SideMenuContent from './SideMenuContent';

class SideMenu extends Component {

	_tweenHandler(ratio) {
		return ({
			drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
		});
	}

	render() {
		const state = this.props.navigationState;
		const children = state.children;
		return(
			<Drawer
				ref={(ref) => this._drawer = ref}
				open={state.open}
				type='overlay'
				content={<SideMenuContent />}
				tapToClose
				openDrawerOffset={0.2}
				onClose={() => Actions.refresh({ key: state.key, open: false })}
				panCloseMask={0.2}
				negotiatePan
				tweenDuration={150}
				tweenHandler={(ratio) => this._tweenHandler(ratio)}>
				<DefaultRenderer navigationState={children[0]}
					onNavigate={this.props.onNavigate} />
			</Drawer>
		)
	};

}

export default SideMenu;