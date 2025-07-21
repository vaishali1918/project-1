import React from 'react'

const TaskNumber = ({ data, setCurrentView }) => {
  return (
    <div id='user-tasknumber' className='flex mt-10 justify-between gap-5 flex-wrap'>
      <div onClick={() => setCurrentView("all")} className='cursor-pointer rounded-xl w-[45%] py-6 px-9 bg-red-400 '>
        <h2 className='text-3xl font-semibold'>{data.tasks.length}</h2>
        <h3 className='text-xl font-medium'>All Tasks</h3>
      </div>
      <div onClick={() => setCurrentView("active")} className='cursor-pointer rounded-xl w-[45%] py-6 px-9 bg-red-400 '>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div onClick={() => setCurrentView("completed")} className='cursor-pointer rounded-xl w-[45%] py-6 px-9 bg-green-400 '>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div onClick={() => setCurrentView("failed")} className='cursor-pointer rounded-xl w-[45%] py-6 px-9 bg-pink-800 '>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskNumber;
