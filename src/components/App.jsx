import Filter from './Filter';
import Contact from './Contact';
import ContactList from './ContactList';
import { AppCont } from './App.styled';
import Loader from './Loader';
import Error from './Error';

const App = () => (
    <AppCont>
      <h1>Phonebook</h1>
      <Contact />
      <h2>Contacts</h2>
      <Filter />
      <Error />
      <Loader />
      <ContactList />
    </AppCont>
  );

export default App;
