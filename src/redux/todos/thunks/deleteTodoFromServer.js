import { deleteTodo} from "../actionsCreators";

const deleteTodoFromServer = (todoId) => async (dispatch) => {
    try {
       await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:'DELETE',
        });
        dispatch(deleteTodo(todoId));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default deleteTodoFromServer;