import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import { v4 as uuidv4 } from "uuid";

import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

// Color combinations:
// #061411 dark grn
// #073024 mid grn
// #114143 dark cyan
// #045952 mid cyan
// #162144 dark blue

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);
  //SAVE TODOS IN LOCAL STORAGE
  const saveTodos = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //TOGGLE SHOW FINISH BUTTON
  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  //EDIT FUNCTION
  const handleEdit = (e, id) => {
    let renametodo = todos.filter((i) => i.id === id);
    setTodo(renametodo[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodos);
    saveTodos();
  };

  //DELETE FUNCTION
  const handleDlt = (e, id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return; // user clicked "Cancel"

    let newTodos = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodos);
    saveTodos();
  };

  // ADD FUNCTION
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveTodos();
  };
  // INPUT HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  //CHECKBOX FUNCTION
  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTodos();
  };

  return (
    <>
      <Nav />
      <div className="w-full mt-12 mb-12 text-white">
        <div className="container  bg-[#131216] px-10 py-5 shadow-[0px_0px_20px_0px_rgba(255,_255,_255,_0.15)]  w-[600px] h-[600px] mx-auto  rounded-xl flex items-center flex-col">
          <h1 className="text-3xl mx-auto mb-4 ">
            Manage your todos at one place
          </h1>
          {/* input todos */}
          <p className="mr-auto font-medium">Add Your Todo</p>
          <div className="inp  w-full my-2.5 gap-2 flex">
            <input
              type="text"
              onChange={handleChange}
              value={todo}
              className="bg-white rounded-3xl w-[80%] text-black border-none p-2"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 2}
              className="bg-[#313035] py-2 px-4 rounded-xl hover:scale-105 hover:bg-[#2D2C30] transition-all ease"
            >
              Add
            </button>
          </div>

          {/* SHOW FINISHED CHECKBOX */}
          <div className=" w-full flex items-center mb-4 border-b">
            <input
              className="my-4  "
              id="show"
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            <label className="mx-2 text-xs text-blue-500" htmlFor="show">
              Show Finished
            </label>
          </div>

          {/* show todos */}
          <p className="mr-auto mb-2 font-medium">Your Todos</p>
          <div className="todolist  text-white w-full overflow-y-auto overflow-x-hidden">
            {todos.length === 0 && (
              <div className="text-zinc-400 text-sm">No tasks to display</div>
            )}
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="todo flex items-center w-full justify-between mb-2 bg-[#17161A] p-1.5 rounded-md"
                  >
                    {/* CHECK BOX */}
                    <div className="flex w-full gap-2 items-baseline wrap-anywhere mr-2 ">
                      <input
                        type="checkbox"
                        name={item.id}
                        onChange={handleCheck}
                        checked={item.isCompleted}
                      />
                      <div
                        className={
                          item.isCompleted
                            ? "line-through text-sm h-fit"
                            : "text-sm h-fit"
                        }
                      >
                        {item.todo}
                      </div>
                    </div>

                    <div className="buttons h-full flex gap-2 text-sm font-medium items-baseline">
                      <button
                        onClick={(e) => {
                          handleEdit(e, item.id);
                        }}
                        className="bg-[#313035] py-1.5 px-4 rounded-xl hover:scale-105 hover:bg-[#2D2C30] transition-all ease"
                      >
                        <BiSolidEdit />
                      </button>
                      <button
                        onClick={(e) => {
                          handleDlt(e, item.id);
                        }}
                        className="bg-[#313035] text-red-500 py-1.5 px-4 rounded-xl hover:scale-105 hover:bg-[#2D2C30] transition-all ease"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
