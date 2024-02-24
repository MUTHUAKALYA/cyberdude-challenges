import { collection, doc, getDocs } from "firebase/firestore";
import {  deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
const Veg = () => {
  const [value, setValue] = useState([]);
  console.log(value);
  console.log(typeof value);

  const deleteRecipe = (id)=>{
    alert("Do you wanna to delete this recipe?")
    console.log("id is",id)
   async function deleteDataFromFirebase(){
    const querySnapshot = await deleteDoc(doc(db,"Veg",id))
   }
  deleteDataFromFirebase()
  }


  useEffect(() => {
    async function gettingValueFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "Veg"));
      const arrayValue = querySnapshot.docs;
      setValue(arrayValue);
    }
    gettingValueFromFirebase();
  }, []);

  return (
    <>
      <div className="bg-white px-20 py-20  space-x-10 flex justify-center items-center ">
        {value.map((value, index) => {
          const newObj = value.data();
          const objId = value.id
          console.log(objId)
          console.log(newObj.recipename);
          return (
            <div
              className="bg-gray-100 px-5 py-5 max-w-xs space-y-4"
              key={index}
            >
              <img
                src={`${newObj.recipeimage}`}
                alt={`${newObj.recipename}-image`}
                className="w-[300px] h-[300px] bg-contain"
              />
              <div className="text-center space-y-3">
                
                  <p className="font-black">{newObj.recipename}</p>
                  <p className="font-semibold">Duration : {newObj.duration}</p>
                
                <button className="bg-orange-200 px-5 py-1 w-full text-sm font-semibold text-white">
                  View Full-Recipe
                </button>
              </div>
              <button
                className="bg-red-300 text-black px-5 py-1 w-[50%]"
                onClick={()=>deleteRecipe(objId)}
              >
                Delete
              </button>
              <button className="bg-green-300 text-black px-5 py-1 w-[50%]">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Veg;
