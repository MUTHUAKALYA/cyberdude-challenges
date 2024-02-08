import PropTypes from "prop-types";

const FormButton = ({ text }) => {
  return (
   <div>
     <button className="px-4 py-2 rounded bg-fuchsia-950 text-white hover:bg-fuchsia-700 w-full my-5">
      {text}
    </button>
   </div>
  );
};

FormButton.propTypes = {
  text: PropTypes.string,
};

export default FormButton;