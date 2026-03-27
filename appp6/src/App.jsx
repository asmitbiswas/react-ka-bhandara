import React from "react";

function App () {
  const course = "Half Stack application development"
  const Part1 = "Fundamentals of React"
  const Excersise1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return(
    <div>
      <h1> {course}</h1>
      <p>{Part1} {Excersise1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      </div>
  )

}

export default App; 


