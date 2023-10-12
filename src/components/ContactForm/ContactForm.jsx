import { useState } from 'react';
import { Form } from './ContactForm.styled';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    const { contacts } = useSelector(getContacts);
    const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Name '${name}' does not exist`);
    }
    // if(name === 'name') setName(value);
    // else setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${name} is already in contacts`);
    dispatch(createContactAction({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[^\d]+$"
          placeholder="Albert Einstein"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>
      <div>
        <label>Numder</label>
        <input
          autoComplete="off"
          type="tel"
          name="number"
          pattern="^(\+?[0-9 \(\)\-]+)$"
          placeholder="+38(097)862-31-45"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm