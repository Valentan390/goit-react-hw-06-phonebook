import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';

import { deleteContact } from 'redux/contactSlice';

const ContactsListItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.listItemContacts}>
      <p>{name} -</p>
      <span>tel: {number}</span>
      <button className={styles.buttonDeleteContacts} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const applyFilters = () => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase().trim())
    );

    return filteredContacts;
  };

  return (
    <>
      <ul className={styles.listContacts}>
        {applyFilters().map(contact => {
          return (
            <ContactsListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          );
        })}
      </ul>
    </>
  );
};
