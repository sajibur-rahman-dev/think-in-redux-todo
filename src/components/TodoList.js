import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunks/fetchTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTodos);
  },[dispatch])

  const handleFilterByStatus = todo => {
    switch (filters.status) {
      case 'Complete':
        return todo.completed;
      case 'Incomplete':
          return !todo.completed;
      default:
        return true;
    }
  }


  const handleFilterByPriority = (todo) => {
    const colors = filters.colors;
    if(colors.length > 0){
      return colors.includes(todo?.priority);
    }
    return true;
  }

  console.log(todos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.filter(handleFilterByStatus).filter(handleFilterByPriority).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
