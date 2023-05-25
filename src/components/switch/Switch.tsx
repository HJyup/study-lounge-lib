import React, { useEffect, useState } from 'react';
import { Switch as SwMUI } from '@mui/material';

const Switch = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem('switchState') === 'true' || false,
  );

  useEffect(() => {
    localStorage.setItem('switchState', checked.toString());
  }, [checked]);

  const handleToggle = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <SwMUI
      id="switch"
      color="default"
      checked={checked}
      onChange={handleToggle}
    />
  );
};

export default Switch;
