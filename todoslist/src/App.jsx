import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Input from './components/Input'
import './App.css'

function App() {
  const [taskList,setTaskList] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks?JSON.parse(savedTasks):[];
  });
  
useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(taskList));

},[taskList])

const handleDelete = (indexToDelete)=>{
const updatedTaskList = taskList.filter((_,index)=> index !== indexToDelete)
setTaskList(updatedTaskList);
}
  return (
    <>
    <h1>Todos list</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <div>{taskList.map((task,index)=>
        <ul key={index}><li >{task}{" "}<button onClick={()=> handleDelete(index)}>delete</button></li></ul>
      )}</div>
    </>
  )
}

export default App
