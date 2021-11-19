import React from "react";
import { TodoProvider } from "./TodoContext";
import UI from "./UI";



function App() {

  

  return (
    <TodoProvider>
      <UI />
    </TodoProvider>
  );
}

export default App;
