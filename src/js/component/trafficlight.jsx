import React, {useState} from "react"
import { render } from "react-dom/cjs/react-dom.production.min"


const TrafficLight = () =>{
      const [color,setColor] = useState("red");
      console.log(color);


return(
<>      
<div className = "container">
      <div className ={"red" + (color === "red" ? "red + glow" : "")} onClick={() => setColor("red")} ></div>
      <div className ={"yellow" + (color=== "yellow" ? "yellow + glow" : "")} onClick={() => setColor("yellow")} ></div>
      <div className ={"green" + (color === "green" ? "green + glow" : "")} onClick={() => setColor("green")} ></div>
</div>
</>
//If you used to conditionally omit it with onClick={condition && value}, pass onClick={condition ? value : undefined} instead. 

)
}


export default TrafficLight;