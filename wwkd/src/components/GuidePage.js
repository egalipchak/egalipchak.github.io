/* GuidePage.js */
import React from 'react';
import { useParams } from 'react-router-dom';

const GuidePage = () => {
  const { id } = useParams();

  // Replace this dummy content with actual guide data fetching or use a guide data array.
  const guide = {
    id: 1,
    title: 'Guide 1',
    content: 'This is the content of Guide 1.',
  };

  return (
    <div>
      <h1>{guide.title}</h1>
      <p>{guide.content}</p>
    </div>
  );
};

export default GuidePage;
