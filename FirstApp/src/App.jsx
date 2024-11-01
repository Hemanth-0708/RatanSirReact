function App()
{
  const items = [{id:101,name:"califlower",category:"veg"},
    {id:101,name:"potato",category:"veg"},
    {id:101,name:"tomato",category:"veg"},
    {id:101,name:"chicken",category:"non-veg"},
    {id:101,name:"france",category:"non-veg"},
    {id:101,name:"mutton",category:"non-veg"}
    ];

    const listitems = items.map(item=>
                         <li key = {item.id} style={{color:item.category==="veg"?"green":"red"}}>id:{item.id}  name:{item.name}  category:{item.category}</li>
    )
return (
 
  <>
  <h1>items In store</h1>
  <p>{listitems}</p>
  </>
)
}
export default App
