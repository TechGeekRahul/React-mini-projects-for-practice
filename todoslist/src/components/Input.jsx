import React,{useState} from "react";
const Input = ({taskList,setTaskList})=>{
    const [input,setInput] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTaskList([...taskList,input]);
        setInput("")
    }
    return(<div>
        <form action="">
            <input type="text" placeholder="Enter your todos" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>)
}
export default Input;