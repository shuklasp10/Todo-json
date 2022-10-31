import { readFileSync, writeFileSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH = path.join(__dirname,"..","Data","todo.json");
//const PATH = './Data/todo.json';

const fetchTodo = () =>{
    const Todo = readFileSync(PATH);
    return JSON.parse(Todo);
}

export const getTodo = (req,res,next) =>{
    try{
        const todo = fetchTodo();
        res.status(200).send(todo);
    }
    catch(e){
        res.status(404).send(e.message);
    }
}

export const deleteTodo = (req,res,next) =>{
    try{
        const id = req.params.id;

        const todo = fetchTodo();

        var newTodo = todo.filter(item=>item.id!==id);

        writeFileSync(PATH,JSON.stringify(newTodo));
        
        res.status(200).send(newTodo);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
}

export const postTodo = (req,res,next) =>{
    try{
        const newTodo = req.body;
        console.log(newTodo);
        let todo = fetchTodo();
        todo = [...todo, newTodo];
        writeFileSync(PATH,JSON.stringify(todo));
        res.status(201).send(todo);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
}

export const patchTodo = (req,res,next) =>{
    try{
        const todo = fetchTodo();
        const id = req.params.id;
        
        let newTodo = todo.map(item => item.id===id ? {...item, done:!item.done} : item);
    
        writeFileSync(PATH,JSON.stringify(newTodo));
        res.status(200).send(newTodo);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e);
    }
}

export const clearTodo = (req,res,next) =>{
    try{
        const todo = fetchTodo();
        let newTodo = todo.filter(item=>item.done===false);
        writeFileSync(PATH,JSON.stringify(newTodo));
        res.status(200).send(newTodo);
    }
    catch(e){
        res.status(400).send(e);
    }
}

export const clearAllTodo = (req,res,next)=>{
    try{
        let newtodo = [];
        writeFileSync(PATH,JSON.stringify(newtodo));
        res.status(200).send(newtodo);
    }
    catch(e){
        res.status(400).send(e);
    }
}