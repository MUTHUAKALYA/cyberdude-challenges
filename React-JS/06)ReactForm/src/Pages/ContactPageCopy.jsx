import React from "react";
import { useForm } from "react-hook-form";

const ContactPageCopy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendInfo = (data) => {
    console.log(data);
  };
  //states

  return (
    <div className="m-10">
      <div className="bg-gray-100 p-10 rounded max-w-2xl mx-auto">
     
        <form className=" my-5 space-y-4" onSubmit={handleSubmit(sendInfo)}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className={`px-4 py-2 bg-gray-200 outline-none rounded w-full ${
              errors.fullName ? "border border-red-500" : "border-none"
            } `}
            {...register("fullName", {
              required: "This Field is required",
              minLength: {
                value: 3,
                message: "This field should have mininum of 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field exceeds 20 characters",
              },
            })}
          />
          {errors.fullName && (
            <small className="text-red-500">{errors.fullName.message}</small>
          )}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`px-4 py-2 bg-gray-200 outline-none rounded w-full ${
              errors.subject ? "border border-red-500" : "border-none"
            } `}
            {...register("subject", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field should have minimum of 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field exceeds 30 characters",
              },
            })}
          />
          {errors.subject && (
            <small className="text-red-500">{errors.subject.message}</small>
          )}
          <textarea
            name="description "
            placeholder="Enter your text briefly"
            className={`px-4 py-2 bg-gray-200 outline-none rounded w-full ${
              errors.fullName ? "border border-red-500" : "border-none"
            } `}
            {...register("description", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field should have minimum of 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field exceeds 30 characters",
              },
            })}
          ></textarea>
          {errors.description && (
            <small className="text-red-500">{errors.description.message}</small>
          )}


          <button className="px-4 py-2 bg-yellow-400 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPageCopy;
