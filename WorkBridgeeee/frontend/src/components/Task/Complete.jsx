// Complete.jsx
import React from 'react';
import TaskCard from './TaskCard';

export const Complete = ({ data }) => {
  return <TaskCard data={data} badgeColor="bg-green-700" status="completed" />;
};

export default Complete