
const todoReducer = (todo=[],action) =>{
    switch(action.type){
        case 'SETTODO':
            return action.data;
        case "ADDTODO":
            return [...todo,action.data];
        case "DELETETODO":
            let newTodo = todo.filter(item=>item.id!==action.data);
            return newTodo;
        case "SETDONE":
            return todo.map(item=>item.id===action.data?{...item,done:!item.done}:item);
        default:
            return todo;
    }
}

export default todoReducer;