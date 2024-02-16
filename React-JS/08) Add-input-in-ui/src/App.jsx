import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const handleSubmit = (e) => {
    // preventing page refresh
    e.preventDefault();

    console.log(value);
    setTask(task.concat([value]));

    //resetting the input field after submitting the form
    setValue("");
  };

  const removeTask = (idToRemove) => {
    const updateArray = task.filter((task, index) => {
      return index !== idToRemove;
    });
    setTask(updateArray);
  };
  return (
    <section className="h-screen bg-teal-800 p-10 ">
      <div className="bg-white  p-10 max-w-3xl mx-auto rounded-lg bg-opacity-70 backdrop-blur-0 shadow-2xl">
        <h1 className="font-black text-xl text-center">To - Do List</h1>

        <form className="py-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add task"
            name="addTask"
            className=" py-2 px-5 w-[85%] outline-none text-gray-400"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-fuchsia-950  py-2 w-[15%] text-white hover:bg-fuchsia-800"
            type="submit"
          >
            Add
          </button>
        </form>

        <ul className="">
          {task.map((task, index) => {
            return (
              <div className="bg-white px-5 py-3 w-[full] flex justify-between">
                <span className=" " key={index}>{`${
                  index + 1
                }) ${task}`}</span>
                <button className="" onClick={() => removeTask(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                    ></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default App;
