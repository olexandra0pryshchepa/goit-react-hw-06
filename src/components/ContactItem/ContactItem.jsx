import PropTypes from "prop-types";
import css from "./ContactItem.module.css";

export default function ContactItem ({ contact, handleDeleteContact }) {
  const { name, number, id } = contact;

  return (
    <li className={css.contactItem}>
      <span>{name}:</span>
      <span> {number}</span>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};