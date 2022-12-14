import { useState, useRef, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./EditProfileStaffPassword.css";
import axios from "axios";

interface EditProfileStaffPasswordProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
export default function EditProfileStaffPassword({ open, onClose }: EditProfileStaffPasswordProps) {

  // const [dataUser, setDataUser] = useState()
  let dataUser = JSON.parse(sessionStorage.getItem("user")!);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const [password, setPassword] = useState(dataUser === null ? "" : dataUser.password);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [loading, setLoading] = useState(false);
  const checkBtn = useRef();

  useEffect(() => {
    try {
      if (password === "") {
        // setDataUser(userData)
        setPasswordOld(passwordOld)
        setPasswordNew(passwordNew)
        setPassword(passwordNew);
      }

    } catch (e) {
      // return <Navigate to="/login" />;
    }

  }, [password]);

  const handleClose = () => {
    onClose();
  };

  const handleEditProfile = async (e: any) => {
    e.preventDefault();
    setLoading(false)

    axios.put(
      process.env.REACT_APP_API_URL +
      `/adminCenter/updatePassword/${JSON.parse(sessionStorage.getItem("id")!)}`,
      {
        passwordOld,
        passwordNew
      },
      config
    )
      .then((data: any) => {
        sessionStorage.setItem("user", JSON.stringify(data))
        alert("Update successful!");
        setLoading(true);
      })
      .catch((error: any) => {
        if (error.response.status === 401) {
          alert("Error: Failed to update user");
        }
      });
     
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
                  <label style={{ textTransform: "capitalize" }}>Old password</label>
                  <input
                    required
                    type="text"
                    className="form-control mt-1"
                    placeholder={"Enter old password"}
                    onChange={(e) => setPasswordOld(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label style={{ textTransform: "capitalize" }}>New password</label>
                  <input
                    required
                    type="text"
                    className="form-control mt-1"
                    placeholder={"Enter new password"}
                    onChange={(e) => setPasswordNew(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" disabled={loading} className="btn btn-secondary">
                  {loading && (
                                            <i className="fa fa-spinner fa-spin" aria-hidden="true"/>
                                        )}
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