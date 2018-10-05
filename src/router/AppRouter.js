import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Fragment>
			<Switch>
				<PublicRoute exact={true} path="/" component={LoginPage} />
				<Route exact={true} component={NotFoundPage} />
			</Switch>
		</Fragment>
	</Router>
);

export default AppRouter;
