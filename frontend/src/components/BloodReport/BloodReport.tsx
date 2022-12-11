import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./BloodReport.css";
import axios from "axios";
import { Checkbox } from '@mui/material';

interface BloodReportProps {
  open: boolean;
  onClose: () => void;
}

  export default function BloodReport({ open, onClose }: BloodReportProps) {
    
let dataBloodReport = JSON.parse(sessionStorage.getItem("blood_report")!);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const [bloodA, setBloodA] = useState(false);
  const [bloodB, setBloodB] = useState(false);
  const [bloodAB, setBloodAB] = useState(false);
  const [bloodO, setBloodO] = useState(false);
  const [note_to_md, setNote_to_md] = useState(dataBloodReport === null ? "": dataBloodReport.note_to_md);
  const [copper_sulfate, setCopper_sulfate] = useState(dataBloodReport === null ? "": dataBloodReport.copper_sulfate);
  const [normal_level, setNormal_level] = useState(dataBloodReport === null ? "": dataBloodReport.normal_level);
  const [low_level, setLow_level] = useState(dataBloodReport === null ? "": dataBloodReport.low_level);
  const [hemoglobinometer, setHemoglobinometer] = useState(dataBloodReport === null ? "": dataBloodReport.hemoglobinometer);
  const [read_value, setRead_value] = useState(dataBloodReport === null ? "": dataBloodReport.read_value);
  const [lungs, setLungs] = useState(dataBloodReport === null ? "": dataBloodReport.lungs);
  const [heart, setHeart] = useState(dataBloodReport === null ? "": dataBloodReport.heart);
  const [TA, setTA] = useState(dataBloodReport === null ? "": dataBloodReport.TA);
  const [TT, setTT] = useState(dataBloodReport === null ? "": dataBloodReport.TT);
  const [TB, setTB] = useState(dataBloodReport === null ? "": dataBloodReport.TB);
  const [bag_type, setBag_type] = useState(dataBloodReport === null ? "": dataBloodReport.bag_type);
  const [note, setNote] = useState(dataBloodReport === null ? "": dataBloodReport.note);
  const [accepted, setAccepted] = useState(dataBloodReport === null ? "": dataBloodReport.accepted);
  const [reason_for_rejection, setReason_for_rejection] = useState(dataBloodReport === null ? "": dataBloodReport.reason_for_rejection);
  const [bag_lot_number, setBag_lot_number] = useState(dataBloodReport === null ? "": dataBloodReport.bag_lot_number);
  const [puncture_site, setPuncture_site] = useState(dataBloodReport === null ? "": dataBloodReport.puncture_site);
  const [begining_of_donation, setBegining_of_donation] = useState(dataBloodReport === null ? "": dataBloodReport.begining_of_donation);
  const [end_of_donation, setEnd_of_donation] = useState(dataBloodReport === null ? "": dataBloodReport.end_of_donation);
  const [amount_of_blood_taken, setAmount_of_blood_taken] = useState(dataBloodReport === null ? "": dataBloodReport.amount_of_blood_taken);
  const [reason_for_suspension, setReason_for_suspension] = useState(dataBloodReport === null ? "": dataBloodReport.reason_for_suspension);

  const handleChangeA = () => {
    setBloodA(!bloodA);
  }

  const handleChangeB = () => {
    setBloodB(!bloodB);
  }

  const handleChangeAB = () => {
    setBloodAB(!bloodAB);
  }

  const handleChangeO = () => {
    setBloodO(!bloodO);
  }

  
  const handleClose = () => {
    onClose();
  };

  const handleEditProfile = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API_URL +
          `/bloodReport/updateBloodReport/${JSON.parse(sessionStorage.getItem("blood_report")!).id}`,
        {
          bloodA,
          bloodB,
          bloodAB,
          bloodO,
          note_to_md,
          copper_sulfate,
          normal_level,
          low_level,
          hemoglobinometer,
          read_value,
          lungs,
          heart,
          TA,
          TT,
          TB,
          bag_type,
          note,
          accepted,
          reason_for_rejection,
          bag_lot_number,
          puncture_site,
          begining_of_donation,
          end_of_donation,
          amount_of_blood_taken,
          reason_for_suspension
        },
       config 
      );
      // console.log(data);
      
      sessionStorage.setItem("blood_report", JSON.stringify(data));

      alert("Update successful!");
      onClose();
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Error: Failed to update blood report");
      }
    }
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Update blood report</DialogTitle>
        {dataBloodReport ? 
                <div className="Auth-form-container dialog">
                <form className="Auth-form" onSubmit={handleEditProfile}>
                  <div className="Auth-form-content">
                  <label style={{ textTransform: "capitalize" }}>Select blood type</label>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Blood type A</label>
                      <Checkbox
                        checked={bloodA}
                        onChange={handleChangeA}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Blood type B</label>
                      <Checkbox
                        checked={bloodB}
                        onChange={handleChangeB}
                      />
                    </div>
                      <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Blood type AB</label>
                      <Checkbox
                        checked={bloodAB}
                        onChange={handleChangeAB}
                      />
                    </div>
                      <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Blood type O</label>
                      <Checkbox
                        checked={bloodO}
                        onChange={handleChangeO}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Note to md</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNote_to_md(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{}}>Copper sulfate</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setCopper_sulfate(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Normal level</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNormal_level(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Low level</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setLow_level(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Hemoglobinometer</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setHemoglobinometer(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Read value</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setRead_value(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Lungs</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setLungs(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Heart</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setHeart(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>TA</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setTA(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>TT</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setTT(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ }}>TB</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setTB(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ }}>Bag type</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBag_type(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Note</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ }}>Accepted</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setAccepted(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Reason for rejection</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setReason_for_rejection(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Bag lot number</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBag_lot_number(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Reason for rejection</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setReason_for_rejection(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ }}>Puncture site</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setPuncture_site(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ }}>Begining of donation</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBegining_of_donation(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>End of donation</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setEnd_of_donation(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Amount of blood taken</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setAmount_of_blood_taken(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Reason for suspension</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setReason_for_suspension(e.target.value)}
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