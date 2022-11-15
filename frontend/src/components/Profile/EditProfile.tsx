import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./EditProfile.css";
import axios from "axios";

interface EditProfileProps {
  open: boolean;
  onClose: () => void;
  data: any;
}

export default function EditProfile({ open, onClose, data }: EditProfileProps) {
  const [address, setAddress] = useState(data.address);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [empscho, setEmpscho] = useState(data.empscho);
  const [firstname, setFirstname] = useState(data.firstname);
  const [surname, setSurname] = useState(data.surname);
  const [username, setUsername] = useState(data.username);
  const [gender, setGender] = useState(data.gender);
  const [jmbg, setJmbg] = useState(data.jmbg);
  const [occupation, setOccupation] = useState(data.occupation);
  const [phone, setPhone] = useState(data.phone);

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
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit Profile</DialogTitle>
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
                defaultValue={data.address}
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
                defaultValue={data.city}
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
                defaultValue={data.state}
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
                defaultValue={data.empscho}
                onChange={(e) => setEmpscho(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ textTransform: "capitalize" }}>first name</label>
              <input
                required
                type="text"
                className="form-control mt-1"
                placeholder={"Enter first name"}
                defaultValue={data.firstname}
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
                defaultValue={data.surname}
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
                defaultValue={data.username}
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
                defaultValue={data.gender}
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
                defaultValue={data.jmbg}
                onChange={(e) => setJmbg(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ textTransform: "capitalize" }}>occupation</label>
              <input
                required
                type="text"
                className="form-control mt-1"
                placeholder={"Enter occupation"}
                defaultValue={data.occupation}
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
                defaultValue={data.phone}
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
    </Dialog>
  );
}
