import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Navbar(prop: any) {
  return (
    <Box className="glow" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Catelog Viewer
          </Typography>
          <Box>
            Dark Mode
            <Switch onChange={prop.change} checked={prop.check} {...label} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
