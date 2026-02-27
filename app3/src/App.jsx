import React, {useState} from 'react';

const App = () => {
    // 1. Create a state variable to track if the text should be green
    const [isGreen, setIsGreen] = useState(false);
    const toggleStyle = () => {
     setIsGreen(green)
     
    }
    };


    return(
    <div>
        <div>
        <h1>GeeksForGeeks</h1>
      </div>
      <div style = {{
        color: isGreen ? "green" : "black",
        fontSize: isGreen ? "x-large" : "medium"
      }}>
        Dom Node
      </div>
      <button onClick={toggleStyle}>
        Click To change
      </button>
    </div>

    
      
    )
    

    

export default App;





