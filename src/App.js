import Home from "./Home";
import Ldm from "./Ldm";
import { useState } from "react";


function App() { 
  const [num, setNum] = useState(0); 
 
  const handleDecrement = () => { 
    if (num > 0) { 
      setNum(num - 1); 
    } 
  }; 
 
  const handleDecrementByFive = () => {
    setNum((prevNum) => Math.max(prevNum - 5, 0));
  };

  const handleDecrementBySix = () => {
    setNum((prevNum) => Math.max(prevNum +5, 15))
  };

  return ( 
    <div> 
      <h1>{num}{num === 15 ? 'max' : num === 0 ? 'min' : ''}</h1> 

      <button onClick={() => {  
        if(num < 15) { 
          setNum(num + 1);
        } 
      }}>+</button> 

      <button onClick={handleDecrementBySix}>+5</button> 

      <button onClick={handleDecrementByFive}>-5</button> 
      
      <button onClick={handleDecrement}>-</button> 
      
      <button onClick={() => setNum(0)}>reset</button> 
    </div>
  );
}

export default App;

