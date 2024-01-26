import React from 'react';

const SingleJobPage = ({ jobTitle }) => {
  return (
    <div>
      <h1>{jobTitle}</h1>
      <p>Job description goes here...</p>
    </div>
  );
};

export default SingleJobPage;
