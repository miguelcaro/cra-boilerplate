import React, { useEffect } from 'react';

const Homepage = ({ exampleAction }) => {
  useEffect(() => {
    exampleAction();
  }, [exampleAction]);

  return (
    <>
      <h1>Homepage</h1>
    </>
  );
};

export default Homepage;
