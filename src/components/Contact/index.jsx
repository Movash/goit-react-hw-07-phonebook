import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, getAllContacts } from 'redux/contacts/operations';
import FormContact from 'Forms/FormContact';
import { selectorContacts } from 'redux/contacts/selectors';

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);
  const { items } = useSelector(selectorContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(getAllContacts());
      setAlreadyLoaded(true);
    }
  }, [dispatch, alreadyLoaded, items]);

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
    const isAlreadyExist = items.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isAlreadyExist) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addNewContact({ name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <FormContact
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name}
      number={number}
    ></FormContact>
  );
};

export default Contact;
