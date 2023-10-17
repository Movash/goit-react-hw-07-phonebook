import React from 'react';
import { List } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/filter/selectors';
import { getAllContacts, removeContact } from 'redux/contacts/operations';

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
};
export default ContactList;
