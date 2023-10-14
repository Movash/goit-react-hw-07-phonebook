import React from 'react';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, removeContact } from 'redux/contacts/contactsSlice';
import { selectorFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id)).then(() => {
      dispatch(getAllContacts());
    });
  };

  return (
    <List>
      {filteredContacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button type="button" onClick={() => handleDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
}
export default ContactList;