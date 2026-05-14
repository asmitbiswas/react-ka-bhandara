import { useState } from "react";
import styles from "./counter.module.css"

export function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div className={styles.counter}>
            <h3> Count {count}</h3>
            <button onClick={() => {count + 1}}> Increment </button>
            <button onClick={() => {count - 1}}> Decrement </button>
            <button onClick={() => setCount(0)}> Reset </button>
        </div>
    )
}