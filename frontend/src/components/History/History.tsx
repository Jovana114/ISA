import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./History.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";

interface HistoryProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

export default function History({ open, onClose }: HistoryProps) {

    const handleClose = () => {
        onClose();
      };

  const [data, setData] = useState([]);
 
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  let centerId = JSON.parse(sessionStorage.getItem("centerId")!)

  const [userId, setUserId] = useState(0);
  const [user, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      axios
        .get(process.env.REACT_APP_API_URL + `/user/getalluserresponses/${userId}_${centerId}`, config)
        .then((res) => setData(res.data));
    })();
  }, []);

  return (
    <>
    <Dialog onClose={handleClose} open={open}>
      {data ? (
        <TableContainer
          style={{ width: "600px", margin: "20px auto" }}
          component={Paper}
        >
            <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>User's username</label>
                <input
                required
                type="text"
                className="form-control mt-1"
                placeholder={"Enter address"}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>num</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.num}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
      </Dialog>
    </>
  );
}
