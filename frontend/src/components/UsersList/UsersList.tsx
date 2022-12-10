import { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import "./UsersList.css";
export const UsersList = () => {
  const [data, setData] = useState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const [usersData, setUsersData] = useState([]);
  const [navigate, setNavigate] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const pages = ["Products", "Pricing", "Blog"];
  // const pages: any = [];
  const settings = ["Profile", "Logout"];

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSettings = (selectedSetting: string) => {
    handleCloseUserMenu();
    if (selectedSetting === "Profile") {
      handleClickOpen();
    } else if (selectedSetting === "Logout") {
      logout();
    }
  };
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const getUsers = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/user/getall", config)
      .then((res: any) => {
        setUsersData(res.data);
      });
  };

  const searchUsers = () => {
    const searchUser = inputRef.current!.value;
    axios
      .get(
        process.env.REACT_APP_API_URL + "/user/getByName/" + searchUser,
        config
      )
      .then((res: any) => {
        console.log(res.data);
        setUsersData(res.data);
      });
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
    // (async () => {
    getUsers();
    // })()
  }, [data]);

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
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
              LOGO
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
                {pages.length > 0 ? (
                  <>
                    {pages.map((page: any) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            {pages.length > 0 ? (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page: any) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
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
      <div className="user-list-component">
        <ul className="users-list">
          {usersData.map((user: any) => (
            <li className="user-item">
              <p>
                <strong>Firstname: </strong>
                <span>{user.firstname}</span>
              </p>
              <p>
                <strong>Surname: </strong>
                <span>{user.surname}</span>
              </p>
              <p>
                <strong>Username: </strong>
                <span>{user.username}</span>
              </p>
              <p>
                <strong>Number: </strong>
                <span>{user.jmbg}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="search-field">
          <p>Search user</p>
          <div>
            <input ref={inputRef} type="text" />
            <button type="button" onClick={searchUsers}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
