// Failed.jsx
import React from 'react';
import TaskCard from './TaskCard';

export const Failed = ({ data }) => {
  return <TaskCard data={data} badgeColor="bg-red-700" status="failed" />;
};

export default Failed