import { useState } from "react";
import { Todo } from "./types/todo";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInput = (e: any) => {
    const value = e.target.value ?? "";

    setTodoInput(value);
  };

  const handleTodo = (e: Event) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: new Date().getTime(),
      text: todoInput,
      isCompleted: false,
    };

    if (todoInput === "") return;

    setTodoList((todoList) => [...todoList, newTodo]);
    setTodoInput("");
  };

  const handleDelateTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="flex flex-row  justify-center w-screen">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center p-4 bg-slate-100">
            Yet Another Todo App
          </h1>
          <form
            className="p-10 bg-slate-100 flex justify-evenly"
            onSubmit={(e: any) => {
              handleTodo(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter your todo"
              className="p-2 mr-2 rounded outline-none ring-2 ring-black"
              value={todoInput}
              onChange={handleTodoInput}
            ></input>
            <button type="submit" className=" p-2 btn bg-emerald-300">
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9 ">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className="bg-slate-100 p-4 justify-between flex  "
          >
            <p className="p-4 overflow-hidden text-ellipsis  "> {todo.text} </p>
            <button
              className="bg-red-400 rounded  p-4 text-white btn ring-opacity-20 md:shrink-0  hover:bg-red-500 ring-red-300 focus:shadow  focus:ring-2 justify-end "
              onClick={() => handleDelateTodo(todo.id)}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
