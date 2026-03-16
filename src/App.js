import { useState } from "react";
import Welcome from "./Welcome";

function App() {
  const [counter, setCounter] = useState(0);
  const greeting = "Hello , GM";
  const members = ["Suraj", "Rahul", "Amit", "Priya"];
  const students = [
    { name: "Suraj", age: 20, class: 5, grade: 90 },
    { name: "Rahul", age: 21, class: 6, grade: 85 },
    { name: "Priya", age: 19, class: 5, grade: 92 },
    { name: "Amit", age: 22, class: 7, grade: 88 },
    { name: "Neha", age: 20, class: 6, grade: 95 },
  ];
  const welcomeData = {
    greeting: greeting,
    members: members,
    students: students,
  };
  return (
    <>
      <h1>Hello React Welcome to Learning</h1>
      <Welcome {...welcomeData}></Welcome>
      <div>
        <h3>Counter Value :{counter}</h3>
        <button
          style={{
            backgroundColor: "#00000",
            border: "1px solid black",
            color: "black",
            margin: "2px",
            padding: "5px",
          }}
          onClick={() => setCounter(counter + 1)}
        >
          Increase value
        </button>
        <button
          style={{
            backgroundColor: "#00000",
            border: "1px solid black",
            color: "black",
            margin: "1px",
            padding: "5px",
          }}
          onClick={() => setCounter(counter - 1)}
        >
          Decrease value
        </button>
      </div>
    </>
  );
}

export default App;
