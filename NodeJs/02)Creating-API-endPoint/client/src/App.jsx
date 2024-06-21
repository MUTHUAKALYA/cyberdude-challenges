import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import InternCard from "./Components/InternCard";

const App = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchDatas() {
      const fetchResult = await fetch("/api");
      const internsData = await fetchResult.json();
      setDatas(internsData);
      console.log(datas);
    }
    fetchDatas();
  }, []);

  return (
    <div className="bg-teal-600">
      <Navbar />

      {datas.map((details, index) => {
        return (
          <div className="grid grid-cols-4">
            {" "}
            <InternCard
              key={index}
              internName={details.name}
              role={details.role}
              company={details.company}
              github={details.github}
              linkedin={details.linkedin}
              location={details.location}
            />
          </div>
          //  <div className="bg-white grid grid-cols-4 mt-20" key={index}>
          //     <div
          //       className="bg-gray-300 rounded-md px-5 py-3 text-center max-w-sm"
          //       key={index}
          //     >
          //       <span>{details.name}</span>
          //     </div>
          //   </div>
        );
      })}
    </div>
  );
};

export default App;
