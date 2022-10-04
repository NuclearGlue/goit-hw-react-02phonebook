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
  contacts: PropTypes.array.isRequired,
};

export default Phonebook;
