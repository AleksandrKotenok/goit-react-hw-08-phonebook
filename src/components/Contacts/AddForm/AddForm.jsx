import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../../redux/contacts/contacts-operations';
import { getContacts } from '../../../redux/contacts/contacts-selectors';

import s from '../AddForm/AddForm.module.css';

export default function AddForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <section className={s.addForm}>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={'name'}>
          Name:
        </label>
        <input
          id={'name'}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <label className={s.label} htmlFor={'tel'}>
          Tel:
        </label>
        <input
          id={'tel'}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <button className={s.button} type="submit">
          Save Contact
        </button>
      </form>
    </section>
  );
}
