import { useState } from "react";
import FormButton from "../Components/Button/FormButton";
import FormInput from "../Components/Forms/FormInput";
import FormTextArea from "../Components/Forms/FormTextArea";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    lastName: "",
    mobileNumber:"",
    emailAddress: "",
    desc: "",
  });
 const handleInputs = (e) =>{
    const {value,name}=e.target;
    setForm((prevValues) => ({
        ...prevValues,
    [name]: value,
      }));
 }


  const submitFormToServer = (e) => {
    e.preventDefault();

    // Do the javascript validations!
    console.log(form);
    alert("Form submitted, successfully!");
  };

  return (
    <div className="m-20 max-w-2xl mx-auto bg-gray-50 p-10 rounded-lg backdrop-blur shadow-xl">
      <form action="" onSubmit={submitFormToServer}>
        <div className="space-y-8 my-5">
          <FormInput
            name="fullName"
            label="Full name"
            placeholder="Your Name"
            value={form.fullName}
            handleOnChange={handleInputs}
            required
          />

          <FormInput
            name="lastName"
            label="Last name"
            placeholder="Your Last Name"
            value={form.fullName}
            handleOnChange={handleInputs}
            required
          />
          <FormInput
            name="mobileNumber"
            label="Mobile Number"
            placeholder="Your Mobile Number"
            value={form.mobileNumber}
            handleOnChange={handleInputs}
            required
          />

          <FormInput
            name="emailAddress"
            label="Email Address"
            placeholder=" your Email Address"
            value={form.email}
            handleOnChange={handleInputs}
            required
          />
          <FormTextArea
            name="desc"
            label="Message"
            placeholder="Your Message"
            value={form.desc}
            handleOnChange={handleInputs}
          />
        </div>
        <div>
          <FormButton text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
