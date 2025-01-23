import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(isRunning){
      interval = setInterval(()=>{
        setTime((prevTime)=> prevTime + 10)
      },10)  
    }else{
      clearInterval(interval);
    }
    return ()=>{clearInterval(interval)}
  },[isRunning])

  return (
    <div>
      <h1>Stopwatch</h1>
      <span>{("0" + Math.floor(time/(60*1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(time/(1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time%1000)/10)).slice(-2)}</span>



      <div>{isRunning ? <button onClick={()=>setIsRunning(false)}>End</button> : <button onClick={()=>setIsRunning(true)}>Start</button> }
        <button onClick={()=> setTime(0)}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
