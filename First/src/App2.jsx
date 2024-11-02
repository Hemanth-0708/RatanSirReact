import { useState } from "react";
function App2()
{
  const [count,setcount] = useState(0);
  

    return(
    <>
    <h1>modification</h1>
    <h1>This is App2</h1>
    <h1 style = {{color:'green'}}>Number Of Apples : {count}</h1>
    {count === 0 ?(
      <p>no apples left</p>):<p>Great!we have {count} apples</p>
    }
    <button onClick ={()=>setcount(count+1)}>Add an Apple</button>
    <button onClick ={()=>count > 0 && setcount(count-1)}>Remove an Apple</button>
    <button onClick ={()=>setcount(0)}>Reset</button>
    
    </>
  )
}
export default App2;