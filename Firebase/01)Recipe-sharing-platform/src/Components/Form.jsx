import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "./Button";
import SelectInput from "./SelectInput";

import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { useEffect } from "react";
import { db } from "../firebase"; 

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const validSubmit = (data) => {
    // const querySnapshot = setDoc(doc(db,"foodrecipes",data.foodcategory),data)
   console.log(data)
  const querySnapShot = addDoc(collection(db,data.foodcategory),data)
   reset();
  };

 
  // useEffect(()=>{
  //   async function settingDataIntoFirebase (){
  //     await addDoc(collection(db,"categories"),{
  //       firstname:"akalya",
  //       lastname:"alagar",
  //       bornedIn:2002
  //     })
  //   }
  //   settingDataIntoFirebase()
  // },[])

  return (
    <div className="bg-orange-300 bg-opacity-20 p-20 bg-newsletter-image h-[800px] bg-contain">
      <div className="bg-gray-50 max-w-2xl mx-auto m-10 p-10 rounded-lg">
        <h1 className="text-center text-2xl py-3 font-black mb-5 text-orange-300">
          Share Your Recipe
        </h1>
        <form
          action=""
          className="space-y-5"
          onSubmit={handleSubmit(validSubmit)}
        >
          <FormInput
            name="fullname"
            placeholder={"Enter your full name"}
            register={register("fullname")}
          />
          <SelectInput
            name="foodcategory"
            register={register("foodcategory")}
          />
          <FormInput
            name="recipename"
            placeholder={"Enter recipe name"}
            register={register("recipename")}
          />
          <FormInput
            name="duration"
            placeholder={"Enter time duration"}
            register={register("emailid")}
          />
          <FormInput
            name="ingridents"
            placeholder={"Enter list of ingridents"}
            register={register("ingridents")}
          />

          <FormInput
            name="recipeimage"
            placeholder={"Enter recipe's Image url"}
            register={register("recipeimage")}
          />
          <Button label="Submit " />
        </form>
      </div>
    </div>
  );
};

export default Form;
