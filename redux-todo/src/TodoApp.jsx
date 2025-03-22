import { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { addTodo,deleteTodo } from "./todoSlice";


const TodoApp = () =>{
    const [input,setInput] = useState("");
    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)
    const handleAdd = ()=>{
        if(input.trim()){
            dispatch(addTodo(input))
            setInput('');
        }
    }
    return(<div>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={handleAdd} >Add</button>
        <div>{todos.map((todo)=>(
             <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={()=>{dispatch(deleteTodo(todo.id))}}>x</button>
            </li>
        ))}</div>
    </div>)
}
export default TodoApp;