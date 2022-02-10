import TodoList from "./page/TodoList";
import CardList from "./page/CardList";
import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/card" element={<CardList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
