
import { Component } from 'react';
import { ContainerDivPhonebook,TitlePhonebook, TitleContacts } from './FormContacts/FormContacts.styled';
import { FormContacts } from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  };
  


 componentDidMount() {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    this.setState({ contacts: JSON.parse(storedContacts) });
  }
}

componentDidUpdate(_, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}


changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
 
}


  checkContactExists = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }
  
  createUser = (data) => {
    const { name } = data;
    if (this.checkContactExists(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    })
  }
 
  render() {
    const {  filter, contacts } = this.state;
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
      <ContainerDivPhonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <FormContacts onSubmit={this.createUser}>
        </FormContacts>
        <TitleContacts>Contacts</TitleContacts> 
        <Filter value={filter} onFind={this.changeFilter}/>
        <ListContacts  contacts={filteredContacts} filter={filter} onDelete={this.deleteContact}>
        </ListContacts>
      </ContainerDivPhonebook>
    );
  }
}



