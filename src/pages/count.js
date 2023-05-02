import React, { useState } from "react";
import './count.css'

const Count = () =>{
        const [count, setCount] = useState(0)
        
        const povecavanje = () => {
            setCount(count + 1)

        }

         const umanjenje = () => {      
            setCount (count - 1)
         }
         
         const reset = () => {
            setCount(0)
         }
    
    return(
        <div className="count">
            <div className="div1">
                <p>Idemo: {count}</p>
            </div>
            <div className="div1">
                <button className="dugmence" onClick={povecavanje}>Klik</button>
                <button className="dugmence" onClick={umanjenje}>Minus</button>
                <button className="dugmence" onClick={reset}>Reset</button>
            </div>
        </div>
    )
} 

export default Count