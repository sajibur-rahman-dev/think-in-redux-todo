import { setToggleTodoStatus } from "../actionsCreators";

const updateTodoStatus = (todoId,todoStatus) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:'PATCH',
            body:JSON.stringify({
                completed:!todoStatus,
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
            }
        });

        const todo = await response.json();

        dispatch(setToggleTodoStatus(todo.id));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default updateTodoStatus;