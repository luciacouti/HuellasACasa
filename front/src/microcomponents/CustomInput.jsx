import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  label,
  initialValue,
  type,
  name,
  options,
  onChange,
}) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      {type === "text" && (
        <input type="text" name={name} value={value} onChange={handleChange} />
      )}
      {type === "image" && (
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={handleChange}
        />
      )}
      {type === "select" && (
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Seleccione una opción</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "date" && (
        <input type="date" name={name} value={value} onChange={handleChange} />
      )}
      {type === "textarea" && (
        <textarea name={name} value={value} onChange={handleChange} />
      )}
    </div>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};
