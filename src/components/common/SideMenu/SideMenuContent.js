import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View} from 'react-native';

import { connect } from 'react-redux';
import { getUser, logout } from 'actions/AuthActions';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import menuItems from './menu';
import LogoutButton from './LogoutButton'
import styles from './styles';

class SideMenuContent extends Component {

		componentWillMount() {
			this.createDataSource(menuItems);
			this.props.getUser();
		}

		renderLogoutButton() {
			<TouchableOpacity onPress={this.props.logout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		}

		createDataSource(items) {
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(items);
		}

		renderRow(menuItem) {
			return <MenuItem menuItem={menuItem} />;
		}

		render() {
			const {user, isAuth, logout} = this.props;
			return (
				<View style={styles.menuContainer}>
					<MenuHeader user={user} isAuth={isAuth} />
					<ListView
						style = {{paddingTop: 20}}
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={this.renderRow} />
					<LogoutButton user={user} isAuth={isAuth} onPress={logout} />
				</View>
			);
		}
}

const mapStateToProps = ({ auth }) => {
    const { user, isAuth } = auth;

    return { user, isAuth };
};

export default connect(mapStateToProps, {getUser, logout})(SideMenuContent);