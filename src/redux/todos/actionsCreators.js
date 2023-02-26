import {
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  SET_PRIORITY_COLOR,
  DELETE_TODO,
  REMOVE_COMPLETED_TODO,
  SET_COMPLETE_ALL_TODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: {
      todoText,
    },
  };
};

export const setToggleTodoStatus = (todoId) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: {
      todoId,
    },
  };
};

export const setTodoPriorityColor = (todoId, color) => {
  return {
    type: SET_PRIORITY_COLOR,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  };
};

export const removeCompletedTodo = () => {
  return {
    type: REMOVE_COMPLETED_TODO,
  };
};

export const setCompletedAllTodo = () => {
  return {
    type: SET_COMPLETE_ALL_TODO,
  };
};
