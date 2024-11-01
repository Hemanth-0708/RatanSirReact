import { useState } from "react";

function App3()
{
    const [score,setscore] = useState(0);
    
    return(
        <>
        <h1>This is App3</h1>
        <h1>Dhoni Score : {score}</h1>
        <button onClick = {()=>setscore(score+1)}>+1</button>
        <button onClick = {()=>setscore(score+2)}>+2</button>
        <button onClick = {()=>setscore(score+3)}>+3 </button>
        <button onClick = {()=>setscore(score+4)}>+4</button>
        <button onClick = {()=>setscore(score+6)}>+6</button>
        </>
    )
}
export default App3;