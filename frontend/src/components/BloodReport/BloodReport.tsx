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
  const [note_to_md, setNote_to_md] = useState("");
  const [copper_sulfate, setCopper_sulfate] = useState("");
  const [normal_level, setNormal_level] = useState(0);
  const [low_level, setLow_level] = useState(0);
  const [hemoglobinometer, setHemoglobinometer] = useState("");
  const [read_value, setRead_value] = useState("");
  const [lungs, setLungs] = useState("");
  const [heart, setHeart] = useState("");
  const [TA, setTA] = useState("");
  const [TT, setTT] = useState("");
  const [TB, setTB] = useState("");
  const [bag_type, setBag_type] = useState("");
  const [note, setNote] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [reason_for_rejection, setReason_for_rejection] = useState("");
  const [syringes_number, setSyringes_number] = useState(0);
  const [gloves_number, setGloves_number] = useState(0);
  const [bag_lot_number, setBag_lot_number] = useState(0);
  const [puncture_site, setPuncture_site] = useState("");
  const [begining_of_donation, setBegining_of_donation] = useState("");
  const [end_of_donation, setEnd_of_donation] = useState("");
  const [amount_of_blood_taken, setAmount_of_blood_taken] = useState(0);
  const [reason_for_suspension, setReason_for_suspension] = useState("");

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
          syringes_number,
          gloves_number,
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
                        onChange={(e) => setNormal_level(Number(e.target.value))}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Low level</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setLow_level(Number(e.target.value))}
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
                        onChange={(e) => setAccepted(Boolean(e.target.value))}
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
                      <label style={{  }}>Syringes number</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setSyringes_number(Number(e.target.value))}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Gloves number</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setGloves_number(Number(e.target.value))}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{  }}>Bag lot number</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBag_lot_number(Number(e.target.value))}
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
                        onChange={(e) => setAmount_of_blood_taken(Number(e.target.value))}
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