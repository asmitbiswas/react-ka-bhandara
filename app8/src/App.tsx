import React from "react";

import { Card } from "./components/card";
import { Button } from "./components/button";
import { UserDetails } from "./components/userCard";
import { Counter } from "./components/counter";
import { Input } from "./components/Input";
import { Effect } from "./components/SimpleEffect";
import type { DocTitle } from "./components/DocTitle";

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

    <UserDetails
    userName="Asmit Biswas"
    userBio="Hey, I am a teen dev learning to web dev fro making my future safe and successful. I wanna make my parent proud. - Thanks ^-^"
    userRole="I am a front end kinda seniior dev"
    avatarImgFact="The tough guy pic"
    onFollow={() => ("I am followed")}
    onMessage={() => ("I am messaged") }


    />
    <Counter/>
    <Input/>
    <Effect/>
    <DocTitle/> 
  </div>
  
    
  
  )
}

export default app