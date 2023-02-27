import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import Dialog from "@mui/material/Dialog";
import "./CreateAppointment.css";

interface CreateAppointmentProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateAppointment({ open, onClose }: CreateAppointmentProps) {

const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const handleClose = () => {
    onClose();
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, serDuration] = useState(0);

  const [elements, setElements] = useState<string[]>([])

  const [add, setAdd] = useState("")

  var jsonData = {
    date: date,
    time: time,
    duration: duration,
    users: elements
  };

  const handleCreateAppointment = async (e: any) => {
    e.preventDefault();

    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
        },
  
        body: JSON.stringify(jsonData),
      };
      fetch(
        process.env.REACT_APP_API_URL +
          `/blood/createBloodAppointment/${JSON.parse(sessionStorage.getItem("centerId")!)}`,
        requestOptions
      ).then((response) => {
        if (response.ok) handleClose();
      });

      console.log(jsonData);
      
    };

    return (    
    <>
        <Dialog onClose={handleClose} open={open}>
          <div className="report-form-wrapper">
            <div className="Auth-form-container dialog">
              <form className="Auth-form" onSubmit={handleCreateAppointment}>
                <div className="Auth-form-content">
                  <div className="form-group mt-3 divSize50L">
                    <label style={{ textTransform: "capitalize" }}>Date</label>
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      type="date"
                      className="form-control mt-1"
                      placeholder={""}
                    />
                  </div>
                  <div className="form-group mt-3 divSize50L">
                    <label style={{ textTransform: "capitalize" }}>Time</label>
                    <input
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={""}
                    />
                  </div>
                  <div className="form-group mt-3 divSize50L">
                    <label style={{ textTransform: "capitalize" }}>Duration</label>
                    <input
                      value={duration}
                      onChange={(e) => serDuration(Number(e.target.value))}
                      required
                      type="number"
                      className="form-control mt-1"
                      placeholder={""}
                    />
                  </div>
                  <div className="form-group mt-3 divSize50L">
                    <label style={{ textTransform: "capitalize" }}>Enter username's of the staff required</label>
                    <input
                      onChange={(e) => setAdd(e.target.value)}
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={""}
                    />
                   <button onClick={(e) => {
                    e.preventDefault()
                    setElements (elements => [...elements,add])
                   }}  
                    className="btn btn-primary">
                      Add
                    </button>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
        </>
      );

}