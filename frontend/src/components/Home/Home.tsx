import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import './Home.css'
import UpgradedTable from '../Table/UpgradedTable';

const Home = () => {
    const [data, setData] = useState({});
  const [navigate, setNavigate] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const navigateLogin = () => {
    setNavigate(true)
  }
  const navigateHome = () => {
    setNavigate(true)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    (async () => {
      try {
        if (data === undefined || null) {
          const userData = JSON.parse(sessionStorage.getItem("user")!);
          setData(userData);
        }
      } catch (e) {
        setNavigate(true);
      }
    })();
  }, [data]);

  if (navigate) {
    return <Navigate to="/login" />;
  }
    return (
      <div>
        
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HOME
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {" "}
                
              </Menu>
            </Box>
          
            <Box  sx={{ flexGrow: 2, alignItems: 'right', justifyContent: 'right' }}>
                <Typography style={{cursor: "pointer"}} onClick={() => navigateLogin()} textAlign="right">Login</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
            <UpgradedTable/>
      </div>
    );
  };
    
  export default Home;