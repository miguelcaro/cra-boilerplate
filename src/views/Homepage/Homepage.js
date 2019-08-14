import React, { Fragment, useEffect } from 'react';

const Homepage = ({ exampleAction }) => {
  useEffect(() => {
    exampleAction();
  }, [exampleAction]);

  return (
    <Fragment>
      <h1>Homepage</h1>
    </Fragment>
  );
};

export default Homepage;
