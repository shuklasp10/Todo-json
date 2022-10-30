import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/todo';

/*
This is dialog box for adding new todo. It contains:
- two input fields for title and description
- two buttons: save- to save todo, cancel: to close dialog
*/

export default function TodoFormModel({open,setOpen}) {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave=(e)=>{
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const id = ((new Date()).getTime()).toString(); //assign unique id by calculating current time duration since ECMAScript epoch (in ms)
    
    //two additional field id(to uniquely identify todo) and done(track complete status) is added for each todo.
    dispatch(addTodo({title,desc,id,done:false})); 
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Enter Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
