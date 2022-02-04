import { useSelector } from 'react-redux';

//import { ContactItem } from './ContactItem/ContactItem';

import s from './ContactList.module.css';

export default function ContactList() {
  //const filterValue = useSelector(getFilter);
  //const { data } = useFetchAPIQuery(filterValue);

  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {/* {data && data.map(item => <ContactItem key={item.id} {...item} />)} */}
      </ul>
    </section>
  );
}
