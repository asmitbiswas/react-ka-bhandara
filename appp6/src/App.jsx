import React from "react";
// 1st code but same output 🥴
// function App () {
//   const course = "Half Stack application development"
//   const Part1 = "Fundamentals of React"
//   const Excersise1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14


//   return(
//     <div>
//       <h1> {course}</h1>
//       <p>{Part1} {Excersise1}</p>
//       <p>{part2} {exercises2}</p>
//       <p>{part3} {exercises3}</p>
//       </div>
  // )

// }\

// /  The outputs are same though  /

// 2nd coded 🥴
// const App = () => {
//   const course = "Half Stack application development"

//   const part1 = {
//     name: "Fundamentals of React",
//     exercises: 10
//   }

//   const part2 = {
//     name: "Using props to pass data",
//     exercises: 7
//   }

//   const part3 = {
//     name: "State of a component",
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>

//       <p>{part1.name} {part1.exercises}</p>
//       <p>{part2.name} {part2.exercises}</p>
//       <p>{part3.name} {part3.exercises}</p>
//     </div>
//   )
// }

// 3rd coded

const name1 = "Fundamentals of React"
const  excersises = 10
const part1 = {
  name: name1,
  excersises:excersises
}
const name2 = "Using props to pass data"
const excersises2 = 7
const part2= {
  name: name2,
  excersises: excersises2
}
const name3 = "State of a component"
const excersises3 = 14
const part3= {
  name: name3,
  excersises: excersises3
}

const total = part1.excersises + part2.excersises + part3.excersises

export default App; 





