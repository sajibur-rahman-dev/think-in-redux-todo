import { addTodo } from "../actionsCreators";

const postTodo = (text) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:9000/todos',{
            method:'POST',
            body:JSON.stringify({
                text:text,
                completed:false,
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
            }
        });

        const todo = await response.json();

        dispatch(addTodo(todo.text));
    } catch (error) {
        console.log(`error is happend during fetch todo ${error}`);
    }
}

export default postTodo;