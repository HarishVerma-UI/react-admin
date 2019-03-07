import React from 'react';
import { Route } from 'react-router-dom';
import Settings from './pages/Settings';
import Comments from './pages/Comments';
import profile from './pages/Profile';

export default [
	<Route exact path="/settings" component={Settings} />,
	<Route exact path="/Comments" component={Comments} />,
	<Route exact path="/profile" component={profile} />,	

];