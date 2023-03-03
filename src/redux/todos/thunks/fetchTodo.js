import { loadTodo } from "../actionsCreators";

const fetchTodos = async (dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:9000/todos');
        const todos = await response.json();

        dispatch(loadTodo(todos));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default fetchTodos;