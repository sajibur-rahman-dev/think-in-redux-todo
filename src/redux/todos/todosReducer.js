import {
  ADD_TODO,
  DELETE_TODO,
  LOAD_TODO,
  REMOVE_COMPLETED_TODO,
  SET_COMPLETE_ALL_TODO,
  SET_PRIORITY_COLOR,
  TOGGLE_TODO_STATUS,
} from "./actionTypes";
import todosIntialState from "./todosIntialState";

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100000)
  return randomNumber;
}


const nextTodoId = (todos) => {
  let maxId;
  if(todos.length === 0){
    maxId = 0;
  } else {
    maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  }
  return maxId + 1;
};

export default function todosReducer(state = todosIntialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const {text,color,complete}  = action.payload;
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: text,
          completed: complete,
          color:color
        },
      ];
    
      case LOAD_TODO:
        const todos = action.payload;
        return [
          ...todos
        ];

    case TOGGLE_TODO_STATUS:

      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case SET_PRIORITY_COLOR:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }

        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);

    case SET_COMPLETE_ALL_TODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case REMOVE_COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}
