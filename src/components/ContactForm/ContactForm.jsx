import { nanoid } from 'nanoid';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import BasicButtons from 'components/BasicButtons/BasicButtons';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { AlertContacts } from 'components/Alert/Alert';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';

const schema = object({
  name: string()
    .max(20, 'Too Long! Max 20')
    .required('Required*')
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+(([' \\-][a-zA-Zа-яА-ЯґҐєЄіІїЇ ])?[a-zA-Zа-яА-ЯґҐєЄіІїЇ]*)*$/,
      'Invalid name format'
    ),

  number: string()
    .required('Required*')
    .max(20, 'Too Long! Max 15')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    ),
});

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAlertSuccess(false);
    setAlertError(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      return setAlertError(true);
    }
    dispatch(addContact({ id: nanoid(), ...data }));
    reset();
    setAlertSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className={css.wrapper}
          sx={{
            '& > :not(style)': { m: 1 },
            '& .MuiFormHelperText-root': {
              color: 'red',
              fontSize: 10,
            },
          }}
        >
          <Box className={css.box}>
            <PersonIcon className={css.icon} />

            <TextField
              {...register('name')}
              helperText={errors.name?.message}
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              label="Name"
              variant="standard"
              autoComplete="none"
            />
          </Box>
          <Box className={css.box}>
            <SmartphoneIcon className={css.icon} />
            <TextField
              {...register('number')}
              helperText={errors.number?.message}
              type="tel"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              label="Number"
              variant="standard"
              autoComplete="none"
            />
          </Box>
          <BasicButtons />
        </Box>
      </form>

      <AlertContacts
        success={alertSuccess}
        error={alertError}
        handleClose={handleClose}
      />
    </>
  );
}
