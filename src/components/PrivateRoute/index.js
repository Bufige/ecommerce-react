import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, condition, redirectTo, ...rest}) => {
	return <Route
		{...rest}
		render={props => 
			condition ? 
				<Component {...props}/>
			:
			<Redirect to={{
				pathname: redirectTo,
				state : {
					from: props.location
				}
			}}/>		
		}
	/>
}