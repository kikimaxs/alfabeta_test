import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './src/components/view/LoginView';
import Signup from './src/components/view/RegisterView';
import Home from './src/components/view/HomePage'

import LoginFormComponent from './src/components/common/LoginForm/index'
import SignupFormComponent from './src/components/common/SignupForm'

import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

//redux setting
import allReducers from './src/redux/reducers/index'
import { ambilSemuaMaps } from './src/redux/action/index';
const store = createStore(allReducers, applyMiddleware(thunk))
const RouterWithRedux = connect()(Router)

store.dispatch(ambilSemuaMaps());
//redux setting

export default class Routing extends Component{
	render() {
		return(
			<Provider store={store}>
				<RouterWithRedux>
			    <Scene key="root">
						<Scene key="home" component={Home} hideNavBar initial={true} />
			      <Scene key="login" component={LoginFormComponent} title="Login" hideNavBar />
			      <Scene key="signup" component={SignupFormComponent} title="Register" hideNavBar/>
            
			    </Scene>
					</RouterWithRedux>
			 </Provider>
			)
	}
}