function App1() {
    const items = [{id:101,name:"califlower",category:"veg"},
        {id:101,name:"potato",category:"veg"},
        {id:101,name:"tomato",category:"veg"},
        {id:101,name:"chicken",category:"non-veg"},
        {id:101,name:"france",category:"non-veg"},
        {id:101,name:"mutton",category:"non-veg"}
        ];
    
  

    const veg = items.filter(item => item.category === "veg");
  
    
    const vegItems = veg.map(item => (
      <li key={item.id}>
        id: {item.id} name: {item.name} category: {item.category}
      </li>
    ));

  const nonveg = items.filter(item => item.category === "non-veg");
  
    
    const nonvegItems = nonveg.map(item => (
      <li key={item.id}>
        id: {item.id} name: {item.name} category: {item.category}
      </li>
    ));
    return (
        <>
          <h1>Veg Items</h1>
          {veg.length > 0 ? (
            <ol>{vegItems}</ol>
          ) : (
            <p>No veg items available</p>
          )}
    
          <h1>Non-Veg Items</h1>
          {nonveg.length > 0 ? (
            <ol>{nonvegItems}</ol>
          ) : (
            <p>No non-veg items available</p>
          )}
        </>
      );
    }
    
    export default App1;
  