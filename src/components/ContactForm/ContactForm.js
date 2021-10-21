import { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import shortid from "shortid";

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        return setName(value);
      case "number":
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name{" "}
        <input
          className={s.formInput}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={numberInputId}>
        Number{" "}
        <input
          className={s.formInput}
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
