import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Asmit", age: 12 },
    { name: "ChatGpt", age: 3 }
  ]);

  const deleteUser = (name) => {
    setUsers(users.filter((u) => u.name !== name));
  };

  return (
    <div>
      {users.map((u, index) => (
        <div key={index}>
          {u.name} ({u.age})
          <button onClick={() => deleteUser(u.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;


