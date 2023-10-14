import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppCont } from './../App.styled';
import Loader from './Loader/Loader';
import Error from './Error/Error';

const App = () => (
    <AppCont>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Error />
      <Loader />
      <ContactList />
    </AppCont>
  );

export default App;
