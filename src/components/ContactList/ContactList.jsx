import PropTypes from "prop-types";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
