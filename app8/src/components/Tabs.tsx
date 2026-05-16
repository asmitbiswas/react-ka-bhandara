import { useState } from "react";
import styles from "./Tabs.module.css"

export function Tab(){
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {label: "Tab 1", content: "This the content of tab 1"},
        {label: "Tab 2", content: "This the content of tab 2"}
    ]
    return(
        <div className = {styles.tabs}>
            <div className = {styles.tabButtons}>
                {tabs.map((tab, index) => 
                <button
                key = {index}
                onClick={ () => setActiveTab(index)}
                className={activeTab === index ? styles.active : ''}
                > {tab.label}</button>
                
                )}
            </div>
            <div className = {styles.tabContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    )
}