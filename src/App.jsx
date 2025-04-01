import { useRef, useState,useEffect } from "react";

export default function App(){
  // let x=0,y=0;
  const [startTime,setStartTime]=useState(0);
  const [currentTime,setCurrentTime]=useState(0);
  // const [stopTime,setStopTime]=useState(0);
  const timePassed=useRef(0);
  const intervalId=useRef(0);

  const [position,setPosition]=useState({x:0,y:0});
  useEffect(()=>{
    const handleMove=(e)=>{
        setPosition({x:e.clientX,y:e.clientY});
    }
    window.addEventListener("mousemove",handleMove);
    return ()=>{
      window.removeEventListener("mousemove",handleMove);
    }
  },[])
  useEffect(() => {
    return () => clearInterval(intervalId.current); // Cleanup on unmount
  }, []);

  var display=0;
  let b=false;
  const handleStart=()=>{
      if(b==false&&intervalId.current!=0) return;
      setStartTime(Date.now()-timePassed.current*1000);
      setCurrentTime(Date.now);
      clearInterval(intervalId.current);
      b=false;
      intervalId.current=setInterval(()=>{
          setCurrentTime(Date.now);
      },100);
  }
  const handleStop=()=>{
    b=true;
    clearInterval(intervalId.current);
    timePassed.current=((currentTime-startTime)/1000).toFixed(3);
    // console.log(timePassed.current);
  }
  const handleReset=()=>{
    setStartTime(0);
    setCurrentTime(0);
    handleStop();
    timePassed.current=0;
    intervalId.current=0;
  }
  display=((currentTime-startTime)/1000);
  return (
    <>
    <div className="pointer" style={{
     transform:  `translate(${position.x}px,${position.y}px)`
    }}></div>
    <div className="stopWatch">
      <p style={{fontSize: '4rem'}}>
        {display.toFixed(3)}sec</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
 
}