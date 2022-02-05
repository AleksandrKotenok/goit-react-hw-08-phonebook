import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={s.list}>
        {visibleContacts &&
          visibleContacts.map(({ number, name, id }) => (
            <li key={id} className={s.item}>
              <span className={s.name}>{name}</span>:
              <span className={s.number}>{number}</span>
              <button
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
