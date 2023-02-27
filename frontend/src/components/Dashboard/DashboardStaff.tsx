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
import EditProfileStaff from "../ProfileStaff/EditProfileStaff";
import RegistertedUsers from "../RegistertedUsers/RegistertedUsers";
import EditProfileStaffPassword from "../ProfileStaff/EditProfileStaffPassword";
import Center from "../CenterProfile/Center";
import History from "../History/History";
import CreateAppointment from "../CreateAppointment/CreateAppointment";
import CustomCalendar from "../CalendarWithEvents/CustomCalendar";
import CircularLoader from "../Loader/CircularLoader";

export const DashboardStaff = () => {
  const [navigate, setNavigate] = useState(false);
  const [navigateIsUser, setNavigateIsUser] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const pages = ["Staff home", "Update center", "History", 'Create appointment', 'Registerted users',];
  const settings = ["Update profile", "Change password", "Logout"];

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

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleSettings = (selectedSetting: string) => {
    handleCloseUserMenu();
    if (selectedSetting === "Update profile") {
      handleClickOpen();
    } else if (selectedSetting === "Logout") {
      logout();
    } else if (selectedSetting === "Change password") {
      handleClickOpen1();
    } else if (selectedSetting === "Update center") {
      handleClickOpen2();
    }
    else if (selectedSetting === "History") {
      handleClickOpen3();
    }
    else if (selectedSetting === "Create appointment") {
      handleClickOpen4();
    }
    else if (selectedSetting === "Registerted users") {
      handleClickOpen5();
    }
  };

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [firstLogin, setFirstLogin] = useState(true)

  let token = JSON.parse(sessionStorage.getItem("token")!)
  let id = JSON.parse(sessionStorage.getItem("id")!)

  useEffect(() => {
    getUserData(id);
  }, []);

  
  const getUserData = (id: number) => {
    fetch(
        process.env.REACT_APP_API_URL + `/user/${id}`,
        {
          method: "GET",
          headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`
        }}
      ).then(response => {
        return response.json()
      }).then(data => {
        setData(data);
        setFirstLogin(data.is_first_login)        
        setLoading(false);
      }
    )
  }
      
  const getData = () => {

    const userData = JSON.parse(sessionStorage.getItem("user")!);
    setData(userData);
    if(userData !== null){
      if (userData.is_first_login === true) setOpen1(true);
    }
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div className="App">
        <CircularLoader />
      </div>
    );
  }

  const logout = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("centerId");
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  if (navigateIsUser) {
    return <Navigate to="/user-home" />;
  }

  if(data && firstLogin){
    return <EditProfileStaffPassword open={true} onClose={() => {
      fetch(
        process.env.REACT_APP_API_URL + `/user/${id}`,
        {
          method: "GET",
          headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`
        }}
      ).then(response => {
        return response.json()
      }).then(data => {
        setData(data);
        setFirstLogin(data.is_first_login)        
        setLoading(false);
      }
    )
    }} />
  }

  return data && (
    <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: {xs: "flex", md: "none" } }}>
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
                >{pages.map((page: any) => (
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
              <Box sx={{flexGrow: 0}}>
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
        <EditProfileStaff open={open} onClose={handleClose} />
        <EditProfileStaffPassword open={open1} onClose={handleClose1} />
        <Center open={open2} onClose={handleClose2} />
        <History open={open3} onClose={handleClose3} />
        <CreateAppointment open={open4} onClose={handleClose4} />
        <RegistertedUsers open={open5} onClose={handleClose5} />

        <CustomCalendar />
    </>
    )
    
};