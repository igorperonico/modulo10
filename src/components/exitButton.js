import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function ExitButton() {
  const history = useHistory();

  const handleExit = () => {
    history.push('/login');
  };

  return (
    <Button
      variant="contained"
      color="warning" 
      onClick={handleExit}
    >
      Sair
    </Button>
  );
}

export default ExitButton;