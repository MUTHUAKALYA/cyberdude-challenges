import React, { useState,useEffect } from "react";

const App = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchDatas() {
     const fetchResult =  await fetch("http://localhost:3000/");
      const quotesData = await fetchResult.json();

      setDatas(quotesData);
    }
    fetchDatas();
  }, []);
  return (
    <div>
      <header className="bg-fuchsia-950 text-gray-200 font-black text-xl px-10 py-3">
        <h1>Interns Details</h1>
      </header>
      {datas.map((data) => {
        return (
          <div className="bg-white rounded p-10 shadow-2xl m-10" key={data.id}>
            <span className="font-semibold text-lg">{data.Name}</span> {"- "}
            <span>{data.role}</span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
