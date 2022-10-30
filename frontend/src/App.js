import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import TodoFormModel from './Components/TodoFormModel';
import React, {useState} from 'react';

/*
This is container component for all components. It contains:
- nav bar containing three buttons to perform operation
- Form model to add new todo; open after button click in navigation menu
- Todo main component containing list of todos.
*/

function App() {
  // open is used to open add todo form model
  const [open,setOpen] = useState(false);

  return (
    <div>
      <Navbar setOpen={setOpen} />
      <TodoFormModel open={open} setOpen={setOpen} />
      <Todo />
    </div>
  );
}

export default App;
