import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
