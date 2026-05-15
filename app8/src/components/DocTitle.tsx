import { useState,useEffect } from "react";
import styles from "./DocTitle.module.css"

export function DocTitle(){
    const [title, setTitle] = useState("My app")
    useEffect( () => {
        document.title = title 
    }, [title])
    return(
        <div className = {styles.doc}>
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type some Shit"
            />
            <p>Browser title: {title}</p>
        </div>
    )
}
