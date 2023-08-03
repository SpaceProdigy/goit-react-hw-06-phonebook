import * as React from 'react';

import Button from '@mui/material/Button';
import css from './BasicButtons.module.css';

export default function BasicButtons() {
  return (
    <div className={css.btn}>
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </div>
  );
}
