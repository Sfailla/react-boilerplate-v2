import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
	console.log(props);
	return (
		<div>
			404! -- <Link to="/">Go back</Link>
		</div>
	);
};

export default NotFoundPage;
