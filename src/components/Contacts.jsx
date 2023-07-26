import {Component} from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
export class Contacts extends Component {
  deleteContacts = e => {
    let idToDelete = e.currentTarget.id;
    this.props.deleteContact (idToDelete);
  };
  renderContacts = arry => {
    if (!arry) {
      return;
    }
    return arry.map ((element, i) => {
      return (
        <li
          key={i.toString ()}
          id={element.id}
          className={css.list}
          onClick={this.deleteContacts}
        >
          {element.name}
          :
          {element.tel}
          <button type="button" className={css.button}>delete</button>
        </li>
      );
    });
  };
  render () {
    return (
      <u className={css.item}>
        {this.renderContacts (this.props.filterItems (this.props.valueFilter))}
      </u>
    );
  }
}
Contacts.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  filterItems: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
