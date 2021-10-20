import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./Filter.module.css";

function Filter({ value, onChange }) {
  const inputId = shortid.generate();
  //  replace(/ /g, '')
  return (
    <label className={s.label} htmlFor={inputId}>
      Find contact by name/number
      <input
        className={s.input}
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
