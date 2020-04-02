import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from '../reducers/auth';

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
