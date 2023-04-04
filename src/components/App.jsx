import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Div, Section, Phonebook, Contacts } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const minusName = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === minusName
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const minusName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(minusName)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  viewfilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);

    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter } = this.state;
    const viewContacts = this.filterContacts();

    return (
      <Div>
        <Section title="Phonebook">
          <Phonebook>Phonebook</Phonebook>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts>Contacts</Contacts>
          <Filter value={filter} onChange={this.viewfilter} />
          <ContactList
            contacts={viewContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Div>
    );
  }
}

export default App;
