import React, {useState} from "react"
import { render } from "react-dom/cjs/react-dom.production.min"


const TrafficLight = () =>{
      const [color,setColor] = useState("red");
      console.log(color);


return(
<>      
<div className = "container">
      <div className ={(color === "red" ? "red + glow" : "red")} onClick={() => setColor("red")} ></div>
      <div className ={(color=== "yellow" ? "yellow + glow" : "yellow")} onClick={() => setColor("yellow")} ></div>
      <div className ={(color === "green" ? "green + glow" : "green")} onClick={() => setColor("green")} ></div>
</div>
</>
//If you used to conditionally omit it with onClick={condition && value}, pass onClick={condition ? value : undefined} instead. 

)
}


export default TrafficLight;