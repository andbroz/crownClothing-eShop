import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-singup/signin-singup.component.jsx';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop/' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
