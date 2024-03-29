import PropTypes from "prop-types";

const FormTextArea = ({
  name,
  label,
  placeholder,
  value,
  handleOnChange,
  required,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        className="px-4 py-2 rounded bg-gray-100 block w-full outline-none"
        required={required}
      ></textarea>
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FormTextArea;