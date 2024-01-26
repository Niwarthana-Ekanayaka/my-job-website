// pages/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import SingleJobPage from '../SingleJobPage';

const SingleJob = () => {
  const router = useRouter();
  const { slug } = router.query;

  const jobTitle = slug.replace(/-/g, ' ');

  return <SingleJobPage jobTitle={jobTitle} />;
};

export default SingleJob;
