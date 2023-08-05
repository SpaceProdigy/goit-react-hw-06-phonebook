const { Snackbar, Alert } = require('@mui/material');

export const AlertContacts = ({ success, error, handleClose }) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        onClose={handleClose}
        open={error}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="error">
          Such contact already exists.
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        onClose={handleClose}
        open={success}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="success">
          Add contact success.
        </Alert>
      </Snackbar>
    </>
  );
};
