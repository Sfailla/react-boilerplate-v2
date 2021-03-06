import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
	component: Component,
	...rest,
	isAuthenticated
}) => (
	<Route
		{...rest}
		component={props =>
			isAuthenticated ? (
				<Fragment>
					<Component {...props} />
				</Fragment>
			) : (
				<Redirect to={{ pathname: '/' }} />
			)}
	/>
);

// export const PrivateRoute = props => <Route {...props} />;

const mapStateToProps = state => {
	return {
		isAuthenticated: !!state.auth.uid
	};
};

export default connect(mapStateToProps)(PrivateRoute);
