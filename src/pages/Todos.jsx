import { useState } from "react";

export default function Todos() {
  const [title, setTitle] = useState("");
  const [classes, setClasses] = useState("");
const [editingId, setEditingId] = useState(null); 
  const [data, setData] = useState([
    {
      id: "a1b2c3",
      text: "Buy groceries",
      classes: "bg-green-100 text-green-800",
      completed: true,
    },
    {
      id: "d4e5f6",
      text: "Finish React project",
      classes: "bg-blue-100 text-blue-800",
      completed: false,
    },
    {
      id: "j1k2l3",
      text: "Schedule dentist appointment",
      classes: "bg-yellow-100 text-yellow-800",
      completed: true,
    },
    {
      id: "m4n5o6",
      text: "Write blog post",
      classes: "bg-indigo-100 text-indigo-800",
      completed: true,
    },
    {
      id: "p7q8r9",
      text: "Organize desk",
      classes: "bg-gray-100 text-gray-800",
      completed: true,
    },
    {
      id: "s1t2u3",
      text: "Plan weekend trip",
      classes: "bg-red-100 text-red-800",
      completed: false,
    },
    {
      id: "v4w5x6",
      text: "Water the plants",
      classes: "bg-teal-100 text-teal-800",
      completed: false,
    },
    {
      id: "y7z8a9",
      text: "Update resume",
      classes: "bg-purple-100 text-purple-800",
      completed: true,
    },
    {
      id: "b1c2d3",
      text: "Read 20 pages of book",
      classes: "bg-orange-100 text-orange-800",
      completed: false,
    },
  ]);

  function handleAddTodo() {
    setData([
      {
        text: title,
        classes,
        completed: false,
        id: Date.now(),
      },
      ...data,
    ]);
  }

  function handleChangeStatus(id) {
    setData(
      data.filter((v) => {
        if (v.id == id) {
          v.completed = !v.completed;
        }
        return v;
      })
    );
  }

  function handleDelete(id) {
  setData(data.filter((v) => v.id !== id));
}

 function handleEdit(todo) {
    setTitle(todo.text);
    setClasses(todo.classes);
    setEditingId(todo.id);
  }
  
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-5">Todos</h1>

      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-700 px-4 py-2 w-[300px]"
          placeholder="Enter todo here..."
        />
        <input
          type="text"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
          className="border border-gray-700 px-4 py-2 w-[300px]"
          placeholder="Enter classes here..."
        />
        <button
          className="px-4 py-2 bg-gray-800 text-white font-semibold hover:bg-black actice:scale-90 duration-300"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10 m-10">
        {data.map((v, index) => (
          <div
            key={v.id}
            className={`border-4 p-5 text-center font-semibold flex items-center justify-center gap-3 flex-col ${
              v.classes
            } ${v.completed ? "border-green-700" : "border-red-700"}`}
          >
            <div>{v.text}</div>
            <div>
              <button
                className={`border-2 border-black rounded-lg text-white active:scale-90 duration-300 text-sm px-3 py-1 ${
                  v.completed ? "bg-green-700" : "bg-red-700"
                }`}
                onClick={() => handleChangeStatus(v.id)}
              >
                {v.completed ? "DONE" : "PENDING"}
              </button>

              <button
                className={"border-2 border-black rounded-lg text-black active:scale-90 duration-300 text-sm px-3 py-1"}
                onClick={() => handleDelete(v.id)}
              >
                Delete
              </button>

               <button
                className="border-2 border-black rounded-lg text-black active:scale-90 duration-300 text-sm px-3 py-1"
                onClick={() => handleEdit(v)}
              >
                {editingId === v.id ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
