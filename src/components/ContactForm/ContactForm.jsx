import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedNewName = name.toLowerCase();
    const normalizedNewNumber = number.toLowerCase();

    const hasDuplicates = contacts.some(
      (contact) =>
        (typeof contact.name === "string" &&
          contact.name.toLowerCase() === normalizedNewName) ||
        (typeof contact.number === "string" &&
          contact.number.toLowerCase() === normalizedNewNumber)
    );

    if (hasDuplicates) {
      alert("This contact already exists!");
      return;
    }

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
