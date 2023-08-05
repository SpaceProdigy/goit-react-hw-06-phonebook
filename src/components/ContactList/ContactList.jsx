import * as React from 'react';
import { useDispatch } from 'react-redux';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './ContactList.module.css';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterText = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => dispatch(deleteContact(e.currentTarget.id));
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filterText.toLowerCase().trim())
  );

  return (
    <div>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ul className={css.wrapper} key={id}>
            <div className={css.box}>
              <PersonIcon fontSize="large" className={css.icon} />

              <div>
                <p>{name} </p>
                <p>{number} </p>
              </div>
            </div>
            <IconButton
              className={css.btn}
              id={id}
              onClick={handleDelete}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ul>
        );
      })}
    </div>
  );
}
