import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class FormComponent extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleInputChange } = this;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label className="form__label">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className="form__label">
            Number
            <input
              className="form__input"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className="form__setting-contact" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

FormComponent.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};

export default FormComponent;
