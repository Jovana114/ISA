import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./EditProfileStaff.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

interface EditProfileStaffProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
  export default function EditProfileStaff({ open, onClose }: EditProfileStaffProps) {

  // const [dataUser, setDataUser] = useState()
let dataUser = JSON.parse(sessionStorage.getItem("user")!);

  const [address, setAddress] = useState(dataUser === null ? "": dataUser.address);
  const [city, setCity] = useState(dataUser === null ? "": dataUser.city);
  const [state, setState] = useState(dataUser === null ? "": dataUser.state);
  const [empscho, setEmpscho] = useState(dataUser === null ? "": dataUser.empscho);
  const [firstname, setFirstname] = useState(dataUser === null ? "": dataUser.firstname);
  const [surname, setSurname] = useState(dataUser === null ? "": dataUser.surname);
  const [username, setUsername] = useState(dataUser === null ? "": dataUser.username);
  const [gender, setGender] = useState(dataUser === null ? "": dataUser.gender);
  const [jmbg, setJmbg] = useState(dataUser === null ? "": dataUser.jmbg);
  const [occupation, setOccupation] = useState(dataUser === null ? "": dataUser.occupation);
  const [phone, setPhone] = useState(dataUser === null ? "": dataUser.phone);
  const [email, setEmail] = useState(dataUser === null ? "": dataUser.email);
  const [center_profile, setCenter_profile] = useState(dataUser === null ? 0: dataUser.email);

  

  useEffect(() => {
    try {
      if(address === ""){
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
        setEmail(dataUser.email);
        setCenter_profile(dataUser.centerProfile);
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
          `/adminCenter/update/${JSON.parse(sessionStorage.getItem("user")!).id}_${center_profile}`,
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
          email
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
        {dataUser ? 
                <div className="Auth-form-container dialog">
                <form className="Auth-form" onSubmit={handleEditProfile}>
                  <div className="Auth-form-content">
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Address</label>
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
                      <label style={{ textTransform: "capitalize" }}>empscho</label>
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
                      <label style={{ textTransform: "capitalize" }}>surname</label>
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
                      <label style={{ textTransform: "capitalize" }}>username</label>
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
                      <label style={{ textTransform: "capitalize" }}>gender</label>
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
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>email</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter email"}
                        defaultValue={dataUser.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>center_profile</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter center_profile"}
                        defaultValue={dataUser.center_profile}
                        onChange={(e) => setCenter_profile(parseInt(e.target.value))}
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
        : <></>}
        {/* {data.roles.map((role: any) => (
          <DialogTitle style={{ fontSize: "1rem" }}>
            {role}
          </DialogTitle>
        ))} */}

      </Dialog>
    </>
  );
}
