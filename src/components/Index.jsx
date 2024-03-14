import React, { useState, useRef } from "react";
import "./Index.css";

function Index() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(0); // Create a ref for the input element
 

  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [degree, setDegree] = useState(0);
  const [fh, setFh] = useState(32);

  

  const handleClick = () => {
    const inputValue = inputRef.current.value; // Get the input value using ref
    setData(inputValue);
  };
  const handleDegreeChange = (e) => {
    const value = e.target.value;
    if (value === "" || isNaN(value)) {
      setDegree("");
      setFh("");
    } else {
      const dvalue = parseFloat(value);
      const fhvalue = (dvalue * 9) / 5 + 32;
      setDegree(dvalue);
      setFh(fhvalue);
    }
  };
  
  const handleFHchange = (e) => {
    const value = e.target.value;
    if (value === "" || isNaN(value)) {
      setFh("");
      setDegree("");
    } else {
      const fhvalue = parseFloat(value);
      const dvalue = ((fhvalue - 32) * 5) / 9;
      setDegree(dvalue);
      setFh(fhvalue);
    }
  };
  

  return (
    <div style={{ textAlign: "center" }}>
      <div className={data}>
        <input type="number" ref={inputRef} defaultValue={data}  />{" "}
        {/* Use ref for input */}
        <button onClick={handleClick}>submit</button>
      </div>
      <div>
        <h1>counter</h1>
        <button
          onClick={() => {
           
            setCount(Number(inputRef1.current.value) - 1);
          }}
        >
          -
        </button>{" "}
        <input type="number" ref={inputRef1} value={count}  onChange={()=>{}} />
        <button
          onClick={() => {
           
            setCount(Number(inputRef1.current.value) + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
       degree <input type="text"  value={degree} onChange={handleDegreeChange} 
       pattern="\d*"/><br />
      farenheat <input type="text"
      value={fh} onChange={handleFHchange} pattern="\d*"/>
      </div>
    </div>
  );
}

export default Index;
