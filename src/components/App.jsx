import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { addContact, deleteContact, selectContacts } from "../redux/contactsSlice";
import { selectNameFilter, changeFilter } from "../redux/filtersSlice";

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

    const handleAddContact = ({ name, number }) => {
        const normalizedNewName = name.toLowerCase();
        const normalizedNewNumber = number.toLowerCase();

         const hasDuplicates = contacts.some(
           (contact) =>
             contact.name.toLowerCase() === normalizedNewName ||
             contact.number.toLowerCase() === normalizedNewNumber
         );

         if (hasDuplicates) {
           alert("This contact already exists!");
           return;
         }

        dispatch(addContact({name, number}));
  };

  const handleContactSearch = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

   const handleFilterContacts = () => {
  return contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter handleContactSearch={handleContactSearch} />
      <ContactsList
        contacts={handleFilterContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
