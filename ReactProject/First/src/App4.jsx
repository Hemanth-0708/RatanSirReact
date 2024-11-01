import { useState } from "react";

function App4()
{
    const [count,setcount] = useState(50);
    const increment = ()=>{
        setcount(count + 1)
    };
    const decrement = ()=>{
       count>0 && setcount(count-1)
    };
    const reset = ()=>{
        setcount(0)

    };
    return(
        <>
        <h1>This Is App4</h1>
        <h1>Value : {count}</h1>
        <button onClick = {increment}>+1</button>
        <button onClick = {decrement}>-1</button>
        <button onClick = {reset}>reset</button>
        </>
    )

    
}
export default App4;