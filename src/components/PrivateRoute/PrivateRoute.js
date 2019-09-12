import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const condition = true;

const PrivateRoute = ({
  component: Component,
  computedMatch,
  location,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (condition ? ( // condition to be private
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
            search: location.search,
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
