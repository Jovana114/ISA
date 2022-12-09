import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./BloodReport.css";

interface props {
  showReport: boolean;
  id: any;
  close: any;
}

export default function BloodReport({ showReport, id, close }: props) {
  const handleReport = async (e: any) => {
    e.preventDefault();
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "680px",
        height: "710px",
        background: "white",
        zIndex: "100",
        display: `${showReport ? "block" : "none"}`,
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Button
          onClick={close}
          style={{
            right: "10px",
            top: "10px",
            float: "right",
            minWidth: "unset",
            padding: "5px",
          }}
        >
          <CloseIcon />
        </Button>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "block",
          maxHeight: '660px',
          height: "100%",
          margin: "0 auto",
          marginTop: "50px",
          padding: "20px auto",
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
      >
        {/* Ovde pises */}
        <div className="Auth-form-container dialog">
          <form className="Auth-form" onSubmit={handleReport}>
            <div className="Auth-form-content">
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>No</label>
                <input
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
      </div>
    </div>
  );
}