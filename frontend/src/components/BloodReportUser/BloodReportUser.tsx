import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface props {
  showReport: boolean;
  id: any;
  close: any;
}

export default function BloodReportUser({ showReport, id, close }: props) {
  const handleUserReport = async (e: any) => {
    e.preventDefault();
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
          height: "100%",
          margin: "0 auto",
          marginTop: "50px",
          padding: "20px auto",
        }}
      >
        {/* Ovde pises */}
        <div className="Auth-form-container dialog">
          <form className="Auth-form" onSubmit={handleUserReport}>
            <div className="Auth-form-content">
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Address</label>
                <input
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={"Placeholder"}
                  defaultValue={"data"}
                />

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
    </div>
  );
}
