import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPriority, filterByStatus } from "../redux/filter/actionCreators";
import { ADD_COLOR, REMOVE_COLOR } from "../redux/filter/actionTypes";

const noOfTasks = (No_Of_Task) => {
  switch (No_Of_Task) {
    case 0:
      return 'No task';
    case 1:
      return '1 task';
    default:
      return `${No_Of_Task} tasks`;
  }
}

export default function Footer() {
  const dispatch =  useDispatch();
  const todos =  useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const remaining = todos.filter((todo) => !todo.completed).length;
  console.log(remaining)

  const handleTodoStatus = (statusKey) => {
    dispatch(filterByStatus(statusKey))
  }

  const handleChengePriorityColor =  (color) => {

    console.log(`color was ===> ${color}`)
    if(filters.colors.includes(color)){
      dispatch(filterByPriority(color,REMOVE_COLOR))
    } else {
      dispatch(filterByPriority(color,ADD_COLOR));
    }
  }

  console.log(filters)
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{noOfTasks(remaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li onClick={() => handleTodoStatus('All')} className={`cursor-pointer ${filters.status === 'All' && 'font-bold'}`}>All</li>
        <li>|</li>
        <li onClick={() => handleTodoStatus('Incomplete')} className={`cursor-pointer ${filters.status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
        <li>|</li>
        <li onClick={() => handleTodoStatus('Complete')} className={`cursor-pointer ${filters.status === 'Complete' && 'font-bold'}`}>Complete</li>
        <li></li>
        <li></li>
        <li onClick={()=>handleChengePriorityColor('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${ filters.colors.includes('green') && "bg-green-500"}`}></li>
        <li onClick={()=>handleChengePriorityColor('red')}  className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colors.includes('red') && "bg-red-500"} `}></li>
        <li onClick={()=>handleChengePriorityColor('yellow')}  className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colors.includes('yellow') && "bg-yellow-500"}`}></li>
      </ul>
    </div>
  );
}
