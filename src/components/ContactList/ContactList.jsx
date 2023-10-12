import React from 'react';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getFilteredContacts().map(el => (
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


