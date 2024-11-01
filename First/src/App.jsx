import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

function App() {
  const boxStyle = {
    border: "2px solid black",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "skyblue" // Adding a light gray background color
  };

  return (
    <>
      <h1>This is App.jsx</h1>
      
      <div style={boxStyle}>
        <App1 />
      </div>
      <div style={boxStyle}>
        <App2 />
      </div>
      <div style={boxStyle}>
        <App3 />
      </div>
      <div style={boxStyle}>
        <App4 />
      </div>
      
    </>
  );
}

export default App;
