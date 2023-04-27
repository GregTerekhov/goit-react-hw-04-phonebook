import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Title, SubTitle, MessageEmptyList } from './App.styled';

const initialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [isFirstRender, contacts]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = contact => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />
      <SubTitle>Contacts</SubTitle>
      {!!contacts.length ? (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        </>
      ) : (
        <MessageEmptyList>
          Unfortunately, there is no contact here. Please enter your first
          contact
        </MessageEmptyList>
      )}
    </Container>
  );
};
