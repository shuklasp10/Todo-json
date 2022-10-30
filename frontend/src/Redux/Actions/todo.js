import * as TodoApi from '../../Api/Todo';

/*
action creators - makes request to api and receive response which is send as action payload to reducers, which updates todo state. 
Here redux-thunk is used as middleware to handle asynchronus request to api
*/

//to initially set todo state
export const setTodo = () => async(dispatch) =>{
    try{
        const {data} = await TodoApi.fetchData();
        dispatch({type:'SETTODO',data}); 
    }
    catch(e){
        console.log(e.message);
    }
}
// update todo list after adding new todo
export const addTodo = (todo) =>async (dispatch) =>{
    try{
        const {data} = await TodoApi.postTodo(todo);
        dispatch({type:'SETTODO',data});
    }
    catch(e){
        console.log(e.message);
    }
}
// update todo list after deleting a todo item
export const deleteTodo = (id) => async(dispatch) =>{
    try{
        const {data} = await TodoApi.deleteData(id);
        dispatch({type:'SETTODO', data});
    }
    catch(e){
        console.log(e.message);
    }
}
// update todo item in state after updating its completion status
export const setDone = (id) => async(dispatch) =>{
    try{
        const {data} = await TodoApi.patchTodo(id);
        dispatch({type:"SETTODO",data});
    }
    catch(e){
        console.log(e.message);
    }
}
// update todo state after filter out all completed todo item
export const clearTodo = () => async(dispatch) =>{
    try{
        const {data} = await TodoApi.clearTodo();
        dispatch({type:'SETTODO',data});
    }
    catch(e){
        console.log(e.message);
    }
}
// clearing out all todo item from list
export const clearAllTodo = () => async(dispatch) =>{
    try{
        const {data} = await TodoApi.clearAllTodo();
        dispatch({type:'SETTODO',data});
    }
    catch(e){
        console.log(e.message);
    }
}