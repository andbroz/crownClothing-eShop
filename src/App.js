import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-singup/signin-singup.component.jsx';

import './App.css';

function App() {
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

export default App;
