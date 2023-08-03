import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm.jsx';
import Title from './Title/Title';

export const App = () => {
  return (
    <div className="main">
      <Title text={'Phonebook'} />
      <ContactForm />
      <Title text={'Contacts'} />
      <Title text="Find contacts by name" fontSize="20px" margin="0" />
      <Filter />
      <ContactList />
    </div>
  );
};
