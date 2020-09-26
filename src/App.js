import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';

import './App.css';

const HatsPage = () => {
	return (
		<div>
			<h1>HATS PAGE</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop/hats' component={HatsPage} />
			</Switch>
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
