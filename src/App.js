import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'reducers';
import Router from './Router';
import SplashScreen from 'config/SplashScreen';

const initSplashScreen = () => {}

class App extends Component {

	componentDidMount () {
	   SplashScreen.init();
	};

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return(
			<Provider store={store}>
				<Router />
			</Provider>
		)
	};
};

export default App;