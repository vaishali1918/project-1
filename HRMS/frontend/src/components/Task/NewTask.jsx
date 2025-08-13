import React from 'react';
import TaskCard from './TaskCard';

const NewTask = ({ data }) => {
  const buttons = [
    { label: 'Accept', className: 'bg-green-600' },
    { label: 'Reject', className: 'bg-red-600' },
  ];

  return <TaskCard data={data} buttons={buttons} badgeColor="bg-purple-700" />;
};
export default NewTask