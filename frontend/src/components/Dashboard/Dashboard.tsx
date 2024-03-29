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
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import EditProfile from "../Profile/EditProfile";
import axios from "axios";
import TableCenter from "../Table/TableCenter";
import UpgradedTable from "../Table/UpgradedTable";
import CircularLoader from "../Loader/CircularLoader";
import Appointments from "../Appointments/Appointments";
import MarkCenter from "../MarkCenter/MarkCenter";
import DoubleTableCenterAppointment from "../Table/DoubleTableCenterAppointment";

export const Dashboard = () => {
  const [navigate, setNavigate] = useState(false);
  const [navigatePage, setNavigatePage] = useState("");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [openMarkCenter, setOpenMarkCenter] = React.useState(false);
  const [openAppointments, setOpenAppointments] = useState(false);

  const pages = ["User home", "Mark center"];
  const settings = ["Update profile", "Logout"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenAppointments = () => {
    setOpenAppointments(true);
  };

  const handleClickOpenMarkCenter = () => {
    setOpenMarkCenter(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAppointments = () => {
    setOpenAppointments(false);
  };
  const handleCloseMarkCenter = () => {
    setOpenMarkCenter(false);
  };

  const handleSettings = (selectedSetting: string) => {
    handleCloseUserMenu();
    if (selectedSetting === "Update profile") {
      handleClickOpen();
    } else if (selectedSetting === "Logout") {
      logout();
    } else if (selectedSetting === "Mark center") {
      handleClickOpenMarkCenter();
    } 
  };
  const logout = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    setNavigate(true);
  };

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const userData = JSON.parse(sessionStorage.getItem("user")!);
    setData(userData);
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div className="App">
        <CircularLoader />
      </div>
    );
  }

  if (navigate) {
    if (navigatePage !== "") return <Navigate to="/appointments" />;
    return <Navigate to="/login" />;
  }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                {pages.map((page: any) => (
                  <MenuItem key={page} onClick={() => handleSettings(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {pages.length > 0 ? (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page: any) => (
                  <Button
                    key={page}
                    onClick={() => handleSettings(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            ) : (
              <></>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/img/avatar.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleSettings(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <TableCenter /> */}
      {/* <UpgradedTable /> */}

      <DoubleTableCenterAppointment />

      <EditProfile open={open} onClose={handleClose} />

      <Appointments open={openAppointments} onClose={handleCloseAppointments} />

      <MarkCenter open={openMarkCenter} onClose={handleCloseMarkCenter} />

      {/* {data ? : <></>} */}
      {/* <h3>Hi {name}</h3> */}

      {/* <button className="btn btn-lg btn-primary"
           onClick={logout}
        >Logout</button> */}
    </>
  );
};
