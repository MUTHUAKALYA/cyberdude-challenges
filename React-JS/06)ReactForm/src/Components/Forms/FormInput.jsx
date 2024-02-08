import PropTypes from "prop-types";

const FormInput = ({
  name,
  label,
  placeholder,
  value,
  handleOnChange,
  required,
}) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor={name} className="">
          {label}
          {required ? <span className="text-red-500 ml-1">*</span> : ""}
        </label>
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          className="px-4 py-2 rounded bg-gray-100 block w-full outline-none"
          required={required}
        />
      </div>
    </>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FormInput;
