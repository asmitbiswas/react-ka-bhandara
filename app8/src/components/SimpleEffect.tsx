import { useState, useEffect } from "react";
import styles from "./SimpleEffect.module.css"
export function Effect(){
    const [count, setCount] = useState(0)
    
    useEffect( () => {
        console.log("Counted !", count)
    }, [count])

    return(
        <div className= {styles.Simple}>
            <h1>Count : {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )

}