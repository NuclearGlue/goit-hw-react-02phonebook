import React from 'react';
import PropTypes from 'prop-types';

function Phonebook({ contacts, onContactDelete }) {
  return (
    <ul className="contacts__list">
      {contacts.map(({ name, number, id }) => (
        <li key={id} className="contacts__item">
          {name}
          <span className="contacts__number">{number}</span>
          <button
            type="button"
            className="contacts__delete-button"
            onClick={() => onContactDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default Phonebook;
