import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./BloodReport.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

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

  const [blood_type, setBlood_type] = useState(dataBloodReport === null ? "": dataBloodReport.blood_type);
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

  useEffect(() => {
    try {
      if(blood_type === ""){
        setBlood_type(dataBloodReport.blood_type);
        setNote_to_md(dataBloodReport.note_to_md);
        setCopper_sulfate(dataBloodReport.copper_sulfate);
        setNormal_level(dataBloodReport.normal_level);
        setLow_level(dataBloodReport.low_level);
        setHemoglobinometer(dataBloodReport.hemoglobinometer);
        setRead_value(dataBloodReport.read_value);
        setLungs(dataBloodReport.lungs);
        setHeart(dataBloodReport.heart);
        setTA(dataBloodReport.TA);
        setTT(dataBloodReport.TT);
        setTB(dataBloodReport.TB);
        setBag_type(dataBloodReport.bag_type);
        setNote(dataBloodReport.note);
        setAccepted(dataBloodReport.accepted);
        setReason_for_rejection(dataBloodReport.reason_for_rejection);
        setBag_lot_number(dataBloodReport.bag_lot_number);
        setPuncture_site(dataBloodReport.puncture_site);
        setBegining_of_donation(dataBloodReport.begining_of_donation);
        setEnd_of_donation(dataBloodReport.end_of_donation);
        setAmount_of_blood_taken(dataBloodReport.amount_of_blood_taken);
        setReason_for_suspension(dataBloodReport.reason_for_suspension);
     
      }    
    } catch (e) {
      // return <Navigate to="/login" />;
    }
  }, [blood_type]);

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
          blood_type,
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
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Blood type</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBlood_type(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Note to md</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNote_to_md(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Copper sulfate</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setCopper_sulfate(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Normal level</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNormal_level(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Low level</label>
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
                      <label style={{ textTransform: "capitalize" }}>Read value</label>
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
                      <label style={{ textTransform: "capitalize" }}>TB</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setTB(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Bag type</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBag_type(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Note</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Accepted</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setAccepted(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Reason for rejection</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setReason_for_rejection(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Bag lot number</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBag_lot_number(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Reason for rejection</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setReason_for_rejection(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Puncture site</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setPuncture_site(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Begining of donation</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setBegining_of_donation(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>End of donation</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setEnd_of_donation(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Amount of blood taken</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        onChange={(e) => setAmount_of_blood_taken(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Reason for suspension</label>
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
