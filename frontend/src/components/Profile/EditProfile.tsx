import * as React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

interface EditProfileProps {
  open: boolean;
  onSubmit: any
  onClose: () => void;
}

export default function EditProfile(props: EditProfileProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };
  const attributes = [
    "address",
    "city",
    "state",
    "empscho",
    "first name",
    "surname",
    "username",
    "gender",
    "jmbg",
    "occupation",
    "phone",
  ];
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit Profile</DialogTitle>
      <div className="Auth-form-container dialog">
      {/* <form className="Auth-form" onSubmit={handleSubmit}> */}
      <form className="Auth-form" onSubmit={props.onSubmit}>
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            {attributes.map((attribute: string) => {
              return (
                <>
                  <label style={{ textTransform: "capitalize" }}>
                    {attribute}
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder={"Enter " + attribute}
                  />
                </>
              );
            })}
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