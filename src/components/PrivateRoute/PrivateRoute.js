import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { path } from 'ramda';

const PrivateRoute = ({
  component: Component,
  computedMatch,
  location,
  ...rest
}) => {
  const uuid = path(['params', 'uuid'])(computedMatch);

  return (
    <Route
      {...rest}
      render={props =>
        true ? ( // condition to be private
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/`,
              state: { from: location },
              search: location.search
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
