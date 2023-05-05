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

  const handleTodo = () => {
    const newTodo: Todo = {
      id: new Date().getTime(),
      text: todoInput,
      isCompleted: false,
    };

    setTodoList((todoList) => [...todoList, newTodo]);
  };

  const handleDelateTodo = (id: number) => {

    
      setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-row  justify-center w-screen">
      <div className="flex flex-col justify-between items-center gap-12 ">
        <h2 className="p-4 text-lg ">Yet Another todo app</h2>
        <div className=" self-center  ">
          <div className="flex border border-red-500 justify-stretch  ">
            <input
              className="    p-2  w-60  "
              type="text"
              placeholder="Enter your to do"
              onChange={ handleTodoInput }
              value={ todoInput}
            />
            <button onClick={ handleTodo }  className=" bg-emerald-500 ring-1 ring-opacity-0  hover:ring-opacity-50 ring-emerald-300   text-white p-3  w-20  ">
              Submit
            </button>
          </div>

          {todoList.map((todo) => (
            <div className="flex  border border-red-500 justify-stretch ">
              <p className=" p-2 w-60  ">{ todo.text }</p>
              <button  onClick={()=> {handleDelateTodo(todo.id)}} className=" bg-red-600   ring-1 ring-opacity-0  hover:ring-opacity-50 ring-red-300 text-white p-3 w-20 ">
                Finished
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
