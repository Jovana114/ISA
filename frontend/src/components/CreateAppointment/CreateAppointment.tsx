import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./CreateAppointment.css";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";

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

  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);


  const [filteredDate, setFilteredDate] = useState("");
  const [filteredTime, setFilteredTime] = useState("");
  const [duration, serDuration] = useState(10);

  const [elements, setElements] = useState<string[]>([])

  const [add, setAdd] = useState("")

  var jsonData = {
    date: filteredDate,
    time: filteredTime,
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Appointment Date"
                      value={date}
                      onChange={(newValue: any) => {
                        setDate(newValue)
                        setFilteredDate(
                          JSON.stringify(newValue).split("T")[0]
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  </div>
                  <div className="form-group mt-3 divSize50L">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Appointment Time"
                        value={time}
                        onChange={(newValue: any) => {
                          setTime(newValue);
                          setFilteredTime(
                            JSON.stringify(newValue)
                              .split("T")[1]
                              .slice(0, 5)
                          );
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        views={["hours"]}
                        inputFormat={"HH:mm"}
                      />
                    </LocalizationProvider>
                  </div>
                  <div>
                  <div className="form-group mt-3 divSize50L">
                    {/* <label style={{ textTransform: "capitalize" }}>Duration</label> */}
                    <input
                    style={{height: '55px'}}
                      value={duration}
                      onChange={(e) => serDuration(Number(e.target.value))}
                      required
                      type="number"
                      className="form-control mt-1"
                      placeholder={"Duration"}
                      min={10}
                    />
                  </div>
                  <div className="form-group mt-3 divSize50L" style={{display: 'inline-flex'}}>
                    {/* <label style={{ textTransform: "capitalize" }}>Enter username's of the staff required</label> */}
                    <input
                    style={{height: '55px', marginRight: '10px'}}
                      onChange={(e) => setAdd(e.target.value)}
                      required
                      type="text"
                      className="form-control mt-1"
                      placeholder={"Staff's Username"}
                    />
                    <button style={{marginTop: '3.5px'}} onClick={(e) => {
                    e.preventDefault()
                    setElements (elements => [...elements,add])
                   }}  
                    className="btn btn-primary">
                      Add
                    </button>
                </div>
                  
                  </div>
                  
                  <div className="d-grid mt-3" style={{width: '300px', margin: '0 auto', alignItems: 'center'}}>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
        </>
      );

}