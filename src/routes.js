import React from 'react';

import {
	BrowserRouter as Router,
} from 'react-router-dom';

import Pages from './route-pages';

export default function Routes(props) {
	return <Router>
		<Pages/>
	</Router>
} 