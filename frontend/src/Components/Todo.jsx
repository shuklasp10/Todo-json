import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import {useDispatch, useSelector} from 'react-redux';
import { setTodo } from '../Redux/Actions/todo';
import { Typography } from '@mui/material';


/*
This is container component for each todo items. It contains:
- list of todo items

this component also fetches data to display
*/

export default function Todo() {
  const todo = useSelector(state=>state.todoReducer);
  const dispatch = useDispatch();
  
  // fetches todo every time todo state is updated in store
  React.useEffect(()=>{
    dispatch(setTodo());
  },[dispatch]);


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto', mt:5}}>
    {todo.length===0 && (<Typography align='center'>No Todo Available!</Typography>)}
      {todo.map((item)=>(
        <TodoItem item={item} key={item.id}/>
      ))}

    </List>
  );
}
