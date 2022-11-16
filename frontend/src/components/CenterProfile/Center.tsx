import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import "./Center.css";

interface CenterProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
  export default function Center({ open, onClose }: CenterProps) {

  // const [dataUser, setDataUser] = useState()
let user = JSON.parse(sessionStorage.getItem("user")!);
let dataUser = user.center_profile;

const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
  },
};

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [appointmentStart, setAppointmentStart] = useState("");
  const [appointmentEnd, setAppointmentEnd] = useState("");
  

  useEffect(() => {
    try {
      if(name === ""){
        // setDataUser(userData)
        setName(dataUser.name);
        setAddress(dataUser.address);
        setDescription(dataUser.description);
        setAverageRating(dataUser.averageRating);
        setAppointmentStart(dataUser.appointmentStart);
        setAppointmentEnd(dataUser.appointmentEnd);
      }
      
    } catch (e) {
      // return <Navigate to="/login" />;
    }
    
  }, [name]);

  const handleClose = () => {
    onClose();
  };

  const handleEditCenterProfile = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API_URL +
        `/centerProfile/update/${dataUser.id}`,
        {
          name,
          address,
          description,
          averageRating,
          appointmentStart,
          appointmentEnd
        },
        config
      );
      // console.log(data);
      
      sessionStorage.setItem("center_profile", JSON.stringify(data));

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
        <DialogTitle>Edit profile center</DialogTitle>
        {dataUser ? 
                <div className="Auth-form-container dialog">
                <form className="Auth-form" onSubmit={handleEditCenterProfile}>
                  <div className="Auth-form-content">
                  <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Name</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter name"}
                        defaultValue={dataUser.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
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
                      <label style={{ textTransform: "capitalize" }}>Description</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter description"}
                        defaultValue={dataUser.description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Average rating</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter averageRating"}
                        defaultValue={dataUser.averageRating}
                        onChange={(e) => setAverageRating(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Appointment start</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter appointmentStart"}
                        defaultValue={dataUser.appointmentStart}
                        onChange={(e) => setAppointmentStart(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Appointment end</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter appointmentEnd"}
                        defaultValue={dataUser.appointmentEnd}
                        onChange={(e) => setAppointmentEnd(e.target.value)}
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