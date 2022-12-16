import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import axios from "axios";
import Dialog from "@mui/material/Dialog";

interface RegistertedUsersProps {
  open: boolean;
  onClose: () => void;
}

export default function RegistertedUsers({ open, onClose }: RegistertedUsersProps) {

    const [data, setData] = useState([]);
  
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
      },
    };

    const handleClose = () => {
        onClose();
      };
  
    useEffect(() => {
      (async () => {
        axios
          .get(process.env.REACT_APP_API_URL + `/user/getAllRegistertedUsersByCenter/${JSON.parse(sessionStorage.getItem("centerId")!)}`, config)
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
            <Table>
              <TableHead>
                <TableRow>
                </TableRow>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Firstname</TableCell>
                  <TableCell>Surname</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Jmbg</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Date of donation</TableCell>
                </TableRow>
             </TableHead>
              <TableBody>
                {
                data.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.firstname}</TableCell>
                    <TableCell>{row.surname}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.jmbg}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.date_when_blood_was_donated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <></>
        )
        }
        </Dialog>
      </>
    );
  }
  