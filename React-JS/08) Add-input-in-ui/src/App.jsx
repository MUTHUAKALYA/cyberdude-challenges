import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const handleSubmit = (e) => {
    // preventing page refresh
    e.preventDefault();

    // validation
    if(value.length >= 0 && value.length != ""){
      console.log(value);
      setTask(task.concat([value]));
       //resetting the input field after submitting the form
    setValue("");
    }
   else{
    alert("The field should have atleast 3 letters .")
   }
  };

  const removeTask = (idToRemove) => {
    const updateArray = task.filter((task, index) => {
      return index !== idToRemove;
    });
    setTask(updateArray);
  };
  return (
    <>
      {" "}
      <Header />
      <section className="h-screen  bg-darkPrimary bg-opacity-70 p-10 ">
       
          <form className="py-3 flex gap-x-2  max-w-3xl mx-auto  " onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder="Add task"
              name="addTask"
              className=" py-2 px-5 w-full outline-none text-gray-400 rounded-md"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="bg-darkSecondary text-white  py-2 px-5 rounded-md hover:bg-gray-800"
              type="submit"
            >
              Add
            </button>
          </form>

          <ul className="max-w-3xl mx-auto ">
            {task.map((task, index) => {
              return (
                <div className="bg-white px-5 py-2 w-[full] flex justify-between">
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
        
      </section>
      <Footer/>
    </>
  );
};

export default App;
