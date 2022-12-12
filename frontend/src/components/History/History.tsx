import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./History.css";
import axios from "axios";
import Button from "@mui/material/Button";
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
  const [username, setUsername] = useState("");

  const search = (username: string) => {
    if (username !== "") {
      axios
        .get(
          process.env.REACT_APP_API_URL + "/user/getByUsername/" + username,
          config
        )
        .then((res) => {setUserId(res.data.id)})
        .catch((e) => alert("No Center Found!"));

        axios
        .get(process.env.REACT_APP_API_URL + `/user/getalluserresponses/${centerId}_${userId}`, config)
        .then((res) => setData(res.data));
    }
  };
  
  useEffect(() => {
    (async () => {
      axios
        .get(process.env.REACT_APP_API_URL + `/user/getalluserresponses/${centerId}_${userId}`, config)
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
                placeholder={"Enter user"}
                onChange={((e) => setUsername(e.target.value))}
                />
            </div>
            <Button onClick={() => search(username)}>Search</Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>bloodA</TableCell>
                <TableCell>bloodB</TableCell>
                <TableCell>bloodAB</TableCell>
                <TableCell>bloodO</TableCell>
                <TableCell>Note to md</TableCell>
                <TableCell>Copper sulfate</TableCell>
                <TableCell>Normal level</TableCell>
                <TableCell>Low level</TableCell>
                <TableCell>Hemoglobinometer</TableCell>
                <TableCell>Read value</TableCell>
                <TableCell>Lungs</TableCell>
                <TableCell>Heart</TableCell>
                <TableCell>TA</TableCell>
                <TableCell>TT</TableCell>
                <TableCell>TB</TableCell>
                <TableCell>Bag type</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Accepted</TableCell>
                <TableCell>Reason for rejection</TableCell>
                <TableCell>Syringes number</TableCell>
                <TableCell>Gloves number</TableCell>
                <TableCell>Bag lot number</TableCell>
                <TableCell>Puncture site</TableCell>
                <TableCell>Begining of donation</TableCell>
                <TableCell>End of donation</TableCell>
                <TableCell>Amount of blood taken</TableCell>
                <TableCell>Reason for suspension</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.bloodA.toString()}</TableCell>
                  <TableCell>{row.bloodB.toString()}</TableCell>
                  <TableCell>{row.bloodAB.toString()}</TableCell>
                  <TableCell>{row.bloodO.toString()}</TableCell>
                  <TableCell>{row.note_to_md}</TableCell>
                  <TableCell>{row.copper_sulfate}</TableCell>
                  <TableCell>{row.normal_level}</TableCell>
                  <TableCell>{row.low_level}</TableCell>
                  <TableCell>{row.hemoglobinometer}</TableCell>
                  <TableCell>{row.read_value}</TableCell>
                  <TableCell>{row.lungs}</TableCell>
                  <TableCell>{row.heart}</TableCell>
                  <TableCell>{row.ta}</TableCell>
                  <TableCell>{row.tt}</TableCell>
                  <TableCell>{row.tb}</TableCell>
                  <TableCell>{row.bag_type}</TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>{row.accepted.toString()}</TableCell>
                  <TableCell>{row.reason_for_rejection}</TableCell>
                  <TableCell>{row.syringes_number}</TableCell>
                  <TableCell>{row.gloves_number}</TableCell>
                  <TableCell>{row.bag_lot_number}</TableCell>
                  <TableCell>{row.puncture_site}</TableCell>
                  <TableCell>{row.begining_of_donation}</TableCell>
                  <TableCell>{row.end_of_donation}</TableCell>
                  <TableCell>{row.amount_of_blood_taken}</TableCell>
                  <TableCell>{row.reason_for_suspension}</TableCell>
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
