import { setTodoPriorityColor, setToggleTodoStatus } from "../actionsCreators";

const updateTodoPriority = (todoId,todoPriority) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:'PATCH',
            body:JSON.stringify({
                color:todoPriority,
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
            }
        });

        const todo = await response.json();

        dispatch(setTodoPriorityColor(todo.id,todo.color));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default updateTodoPriority;