import { useState } from "react";
import "./App.css";

type TodoItem = {
  text: string;
  completed: boolean;
};

function App() {
  // TODO: Implement the main application component
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const addTodo = () => {
    // Prevent adding empty todos
    if (newTodo.trim() === "") {
      setError("Todo cannot be empty");
      return;
    }

    // Prevent adding duplicate todos
    if (todos.some((todo) => todo.text === newTodo.trim())) {
      setError("Todo already exists");
      return;
    }

    const todo: TodoItem = { text: newTodo.trim(), completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
    setError(null);
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white p-4">
      <h1>Todo List</h1>
      <div className="flex justify-around items-center w-full max-w-md mb-4 gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-2 rounded-md text-black bg-white"
        />
        <button
          onClick={addTodo}
          className="bg-white text-slate-400 p-2 rounded-md"
        >
          Add
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            className="flex *:items-center gap-2 mb-2"
          >
            <input
              type="checkbox"
              name={`checkbox-${index}`}
              checked={todo.completed}
              onChange={(e) => {
                toggleTodo(index);
              }}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
