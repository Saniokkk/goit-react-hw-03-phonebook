import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm';
import { addToStorage, getFromStorage } from './components/storage';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('DidMount');
    this.setState(
      getFromStorage('contacts')
        ? { contacts: getFromStorage('contacts') }
        : [],
    );
  }

  componentDidUpdate() {
    console.log('DidUpdate');
    addToStorage('contacts', this.state.contacts);
  }

  handleDeleteBtn = event => {
    this.setState(() => {
      const contacts = Object.values(this.state.contacts);
      const currentId = event.target.closest('li').id;
      const newState = contacts.filter(({ id }) => {
        return id !== currentId;
      });
      return { contacts: [...newState] };
    });
  };

  changeStateAfterSubmit = (contactName, contactNumber) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === contactName)) {
        alert(`${contactName} is already in contacts`);
      } else {
        return {
          contacts: [
            ...prevState.contacts,
            { name: contactName, number: contactNumber, id: nanoid() },
          ],
        };
      }
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  contactsFilter = () => {
    console.log('FILTER');
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => {
      console.log(name);
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  render() {
    return (
      <>
        <Section title="Phone book">
          <ContactForm stateApp={this.changeStateAfterSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList
            onChange={this.handleChange}
            handleBtn={this.handleDeleteBtn}
            filterContacts={this.contactsFilter()}
            value={this.state.filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
