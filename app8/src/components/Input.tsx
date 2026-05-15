import { useState } from "react";
import styles from "./input.module.css"
export function Input(){
    const [value, setValue] = useState('')

    return(
        <div className = {styles.Input}>
            <label> Enter text</label>
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type some shit"
            />
            <p>You typed :{value}</p>
        </div>
    )
}