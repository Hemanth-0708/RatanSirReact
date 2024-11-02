
import { useState } from "react";
function App1()
{
   
    const originalPrice = 5000;
    const [price,setprice] = useState(originalPrice);
    
    const applydiscount = (discount)=>{
     if(discount === 10)
     {
       setprice(originalPrice * 0.1);
       
     }
     else if(discount === 20)
     {
       setprice(originalPrice * 0.2);
       
     }
     else if(discount === 30)
     {
       setprice(originalPrice * 0.3);
       
     }
     else
     {
       setprice(0);
      
     }
     
    }
     
 
   return(
     <>
     <h1>this is for pull </h1>
     <h1>This is App1</h1>
     <h1>Original Price : {originalPrice}</h1>
     <h1>Final price : {originalPrice-price}</h1>
     <h2>Discount Price : {price.toFixed(2)}</h2>
    
     
     <p style={{color:"red"}}>click a button to apply a discount</p>
     <button onClick={()=> applydiscount(10)}>10% Discount</button>
     <button onClick={()=>applydiscount(20)}>20% Discount</button>
     <button onClick={()=>applydiscount(30)}>30% Discount</button>
     <button onClick={()=>applydiscount(0)}>Reset Price</button>
     </>
   )
   
}
export default App1;
