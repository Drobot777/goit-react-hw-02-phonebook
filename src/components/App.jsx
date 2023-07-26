import {Phonebook} from './Phonebook';
import {nanoid} from 'nanoid';
import {Component} from 'react';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  toggle = (name, tel) => {
    this.state.contacts.forEach(date=>{
      if(date.name===name){
        return alert('Rosie Simpson is already in contacts')
      }
    })
    return this.state.contacts.push ({
      name: name,
      id: nanoid (),
      tel: tel,
    });
  };
  changeFilter = value => {
    this.setState ({filter: value});
  };
  deleteContact = id => {
    this.state.contacts.forEach ((el, i) => {
      if (el.id === id) {
        return delete this.state.contacts[i],
        this.setState ({});
      }
    });
  };

  filterItems = query => {
    if (query === '') {
      return;
    }
    let arryContacts = this.state.contacts.filter (el => {
      return el.name.toLowerCase ().indexOf (query.toLowerCase ()) > -1;
    });
    return arryContacts;
  };
  render () {
    return (
      <div>

        <h1 style={{textAlign: 'center'}}>Phonebook</h1>
        <Phonebook toggle={this.toggle} />
        <h2 style={{textAlign: 'center'}}>Contact</h2>
        <Filter changeFilter={this.changeFilter} />
        <Contacts
          valueFilter={this.state.filter}
          filterItems={this.filterItems}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
