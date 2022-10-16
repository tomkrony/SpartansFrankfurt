import * as React from "react";

import './Header.css';
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

  
export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton className="HeaderIconButton">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Frankfurt Spartans
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
