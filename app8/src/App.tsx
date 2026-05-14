import React from "react";

import { Card } from "./components/card";
import { Button } from "./components/button";

function app(){
  return(

  <div>
      
  <Card
  title="My card"
  description="The img is so cool"
  img="_.jpeg"

    <Button
    label = "Click me"
     onClick={() => alert('Clicked!')} 
        color="green" 
        size="md"
    />
    <Button
    label="Submit"
    onClick={() => alert("Submited!")}
    color="BLack"
    size="lg"
/>

  </div>
  

  
  )
}

export default app