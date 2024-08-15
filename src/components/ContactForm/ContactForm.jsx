import { Component } from "react";
import PropTypes from "prop-types";
import css from  "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);

    const emptyFields = {
      name: "",
      number: "",
    };

    this.setState(emptyFields);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              required
              pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              required
              pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
              title="Format: XXX-XXX-XX-XX"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};