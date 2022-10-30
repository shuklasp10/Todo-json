import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {deleteTodo,setDone} from '../Redux/Actions/todo';
 
/* 
this components render each todo item. It contains:
- todo details: title, description
- checkbox to mark completion of todo
- button to delete todo
*/

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () =>{
    dispatch(deleteTodo(item.id));
  }

  const handleCheck = () =>{
    dispatch(setDone(item.id));
  }

  return (
    <>
      <ListItem alignItems="flex-start" secondaryAction={
              <IconButton onClick={handleDelete} edge="end" aria-label="comments">
                <DeleteIcon  sx={{color:'#e33c2f'}}/>
              </IconButton>
            }>
        <Checkbox checked={item.done} onClick={handleCheck}/>
        <ListItemText
          sx={item.done ? {textDecoration:'line-through'}:null}
          primary={item.title}
          secondary={item.desc}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default TodoItem