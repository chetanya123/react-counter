import React, { useState } from "react";
import "./style.css";



export default function App() {
  let [num, setNum] = useState(0) ;

  let  increase = () => {
    let newNum = num + 2;
    setNum(newNum);
 }

  let  decrease = () =>{
    let newNum = num-2 ;
    {newNum>0 ? setNum (newNum) : setNum (0) }
  }
   
  return (
<div>

<h1> Counter </h1>
<div className = "counter">
  <h3 className = "digit" value = "number" id= "dig"> {num}</h3>
  </div> 
<button className= "inc" type = "button" onClick = {increase} > Increase </button>
<button className= "dec" type = "button" onClick = {decrease} > Decrease </button> 

    </div>
  );
  }