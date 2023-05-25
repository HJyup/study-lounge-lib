import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

import './Navbar.module.scss';
import Switch from "../switch"

interface NavbarProps {
  text?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  text = 'Different knowledge in one place',
}) => (
  <div className={'navbar-container'}>
    <AppBar position={'fixed'} className={'navbar'}>
      <Toolbar className={'navbar-container'}>
        <div className={'title'}>
          Study Lounge
          <div className={'dark-theme'}>
            Dark Theme
            <Switch />
          </div>
        </div>
        <div className={'subtitle'}>{text}</div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
