import PropTypes from "prop-types";
import ContactItem  from "../ContactItem/ContactItem";

export const ContactsList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          handleDeleteContact={handleDeleteContact}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};