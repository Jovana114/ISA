import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import CircularLoader from "../Loader/CircularLoader";

interface MarkCenterProps {
  open: boolean;
  onClose: () => void;
  
}

export default function MarkCenter({ open, onClose }: MarkCenterProps) {

    const token = JSON.parse(sessionStorage.getItem("token")!);
    let id = Number(sessionStorage.getItem('id'))
    
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
        },
      };
    
      const [mark, setMark] = useState(0)
      const [center_profile_name, setCenterProfile] = useState("")

      var jsonData = {
        mark: mark,
        center_profile_name: center_profile_name
      };
    
      const handleClose = () => {
        onClose();
      };
    
      const handleMark = async (e: any) => {
        e.preventDefault();
    
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(jsonData),
        };
        fetch(
          process.env.REACT_APP_API_URL +
            `/centerProfile/markCenter/${id}`,
          requestOptions
        ).then((response) => {
          if (response.ok) handleClose();
        });

        console.log(jsonData);

      };
    
      return (
        <>
          <Dialog onClose={handleClose} open={open}>
            { 
                <div className="Auth-form-container dialog">
                  <form className="Auth-form" onSubmit={handleMark}>
                  <div className="Auth-form-content">
                    <label style={{ textTransform: "capitalize" }}>Enter mark</label>
                        <div className="form-group mt-3">
                          <input
                            required
                            type="text"
                            className="form-control mt-1"
                            value={mark}
                            onChange={(e) => setMark(Number(e.target.value))}
                          />
                        </div>
                    </div>
                  <div className="Auth-form-content">
                    <label style={{ textTransform: "capitalize" }}>Enter center-profile's name</label>
                    <div className="form-group mt-3">
                    <input
                      value={center_profile_name}
                      onChange={(e) => setCenterProfile(e.target.value)}
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={""}
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
                }
          </Dialog>
        </>
      );
    }
    