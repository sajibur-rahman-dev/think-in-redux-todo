import React, { useState } from "react";
import notesImage from "../assets/images/notes.png";
import doubleTick from "../assets/images/double-tick.png";
import addIcon from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { addTodo, removeCompletedTodo, setCompletedAllTodo } from "../redux/todos/actionsCreators";
import postTodo from "../redux/todos/thunks/postTodo";

export default function Header() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postTodo(input));
    setInput('');
  }

  const handleCompliteAllTask = () => {
    dispatch(setCompletedAllTodo())
  }

  const handleClearCompletedTodo = () => {
    dispatch(removeCompletedTodo())
  }
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitHandler}>
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${addIcon}')] bg-no-repeat bg-contain`}
          onClick={submitHandler}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleCompliteAllTask}>
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompletedTodo}>Clear completed</li>
      </ul>
    </div>
  );
}
