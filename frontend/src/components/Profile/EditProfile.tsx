import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./EditProfile.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

interface EditProfileProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
export default function EditProfile({ open, onClose }: EditProfileProps) {
  // const [dataUser, setDataUser] = useState()
  let dataUser = JSON.parse(sessionStorage.getItem("user")!);
  let role = JSON.parse(sessionStorage.getItem("role")!);

  const [address, setAddress] = useState(
    dataUser === null ? "" : dataUser.address
  );
  const [city, setCity] = useState(dataUser === null ? "" : dataUser.city);
  const [state, setState] = useState(dataUser === null ? "" : dataUser.state);
  const [empscho, setEmpscho] = useState(
    dataUser === null ? "" : dataUser.empscho
  );
  const [firstname, setFirstname] = useState(
    dataUser === null ? "" : dataUser.firstname
  );
  const [surname, setSurname] = useState(
    dataUser === null ? "" : dataUser.surname
  );
  const [username, setUsername] = useState(
    dataUser === null ? "" : dataUser.username
  );
  const [gender, setGender] = useState(
    dataUser === null ? "" : dataUser.gender
  );
  const [jmbg, setJmbg] = useState(dataUser === null ? "" : dataUser.jmbg);
  const [occupation, setOccupation] = useState(
    dataUser === null ? "" : dataUser.occupation
  );
  const [phone, setPhone] = useState(dataUser === null ? "" : dataUser.phone);

  useEffect(() => {
    try {
      if (address === "") {
        // setDataUser(userData)
        setAddress(dataUser.address);
        setCity(dataUser.city);
        setState(dataUser.state);
        setEmpscho(dataUser.empscho);
        setFirstname(dataUser.firstname);
        setSurname(dataUser.surname);
        setUsername(dataUser.username);
        setGender(dataUser.gender);
        setJmbg(dataUser.jmbg);
        setOccupation(dataUser.occupation);
        setPhone(dataUser.phone);
      }
    } catch (e) {
      // return <Navigate to="/login" />;
    }
  }, [address]);

  const handleClose = () => {
    onClose();
  };

  const handleEditProfile = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API_URL +
          `/user/update/${JSON.parse(sessionStorage.getItem("user")!).id}`,
        {
          address,
          city,
          state,
          empscho,
          firstname,
          surname,
          username,
          gender,
          jmbg,
          occupation,
          phone,
        },
        { withCredentials: false }
      );
      // console.log(data);

      sessionStorage.setItem("user", JSON.stringify(data));

      alert("Update successful!");
      onClose();
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Error: Failed to update user");
      }
    }
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Profile</DialogTitle>
        {dataUser ? (
          <>
            <DialogTitle>{role.replace('ROLE_','')}</DialogTitle>
            <div className="Auth-form-container dialog">
              <form className="Auth-form" onSubmit={handleEditProfile}>
                <div className="Auth-form-content">
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      Address
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter address"}
                      defaultValue={dataUser.address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>City</label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter city"}
                      defaultValue={dataUser.city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>state</label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter state"}
                      defaultValue={dataUser.state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      empscho
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter empscho"}
                      defaultValue={dataUser.empscho}
                      onChange={(e) => setEmpscho(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      first name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter first name"}
                      defaultValue={dataUser.firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      surname
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter surname"}
                      defaultValue={dataUser.surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      username
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter username"}
                      defaultValue={dataUser.username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      gender
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter gender"}
                      defaultValue={dataUser.gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>JMBG</label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter JMBG"}
                      defaultValue={dataUser.jmbg}
                      onChange={(e) => setJmbg(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>
                      occupation
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter occupation"}
                      defaultValue={dataUser.occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ textTransform: "capitalize" }}>phone</label>
                    <input
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Enter phone"}
                      defaultValue={dataUser.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* {data.roles.map((role: any) => (
          <DialogTitle style={{ fontSize: "1rem" }}>
            {role}
          </DialogTitle>
        ))} */}
      </Dialog>
    </>
  );
}
