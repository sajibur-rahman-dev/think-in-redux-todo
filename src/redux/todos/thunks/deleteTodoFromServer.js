import { deleteTodo} from "../actionsCreators";

const deleteTodoFromServer = (todoId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:'DELETE',
        });

        const todo = await response.json();

        dispatch(deleteTodo(todoId));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default deleteTodoFromServer;