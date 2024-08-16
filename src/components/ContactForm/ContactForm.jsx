import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          required
          pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          required
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          title="Format: XXX-XXX-XX-XX"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
