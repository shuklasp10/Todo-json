import URL from './URL';
import axios from 'axios';


// fetch data from api
export const fetchData = () =>(
    axios.get(URL)
)
// delete request to api with todo id as parameter
export const deleteData = (id) =>(
    axios.delete(URL+`/${id}`)
)
//Post request to api to add new todo; todo object in body of request
export const postTodo = (todo) =>(
    axios.post(URL,todo)
)
//Patch request to update completed status of specific todo; todo id as parameter of request
export const patchTodo = (id) =>(
    axios.patch(URL+`/${id}`)
)
// patch reuqest to filter all non completed todo and delete completed todo
export const clearTodo = () =>(
    axios.patch(URL)
)
//delete request to delete all todo from list
export const clearAllTodo = () =>(
    axios.delete(URL)
)

