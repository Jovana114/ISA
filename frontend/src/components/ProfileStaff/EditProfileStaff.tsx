import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./EditProfileStaff.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import CircularLoader from "../Loader/CircularLoader";

interface EditProfileStaffProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
  export default function EditProfileStaff({ open, onClose }: EditProfileStaffProps) {

  // value value set = useStatevalue
const token = JSON.parse(sessionStorage.getItem("token")!);
let id = Number(sessionStorage.getItem('id'))

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const [data, setData] = useState([])
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [empscho, setEmpscho] = useState('')
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [jmbg, setJmbg] = useState('')
  const [occupation, setOccupation] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  
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
        console.log(data);
        
        setData(data)
        setAddress(data.address);
        setCity(data.city);
        setState(data.state);
        setEmpscho(data.empscho);
        setFirstname(data.firstname);
        setSurname(data.surname);
        setUsername(data.username);
        setGender(data.gender);
        setJmbg(data.jmbg);
        setOccupation(data.occupation);
        setPhone(data.phone);
        setEmail(data.email);
      }
    )
  }

  useEffect(() => {
    getUserData(id)
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleEditProfileStaff = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API_URL +
          `/adminCenter/update/${JSON.parse(sessionStorage.getItem("user")!).id}`,
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
       config 
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
        {data ? 
                <div className="Auth-form-container dialog">
                <form className="Auth-form" onSubmit={handleEditProfileStaff}>
                  <div className="Auth-form-content">
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Address</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter address"}
                        value={address}
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
                        value={city}
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
                        value={state}
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
                        value={empscho}
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
                        value={firstname}
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
                        value={surname}
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
                        value={username}
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
                        value={gender}
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
                        value={jmbg}
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
                        value={occupation}
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
                        value={phone}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
        : <CircularLoader />}
        {/* {data.roles.map((role: any) => (
          <DialogTitle style={{ fontSize: "1rem" }}>
            {role}
          </DialogTitle>
        ))} */}

      </Dialog>
    </>
  );
}
