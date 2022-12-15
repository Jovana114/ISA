import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import { Button } from '@mui/material';
import BloodReportUser from "../BloodReportUser/BloodReportUser";

function CenterAppointment(
  id: number,
  name: string,
  address: string,
  averageRating: number,
  appointments: any
) {
  return {
    name,
    address,
    averageRating,
    appointments,
  };
}

function appointmentData(
    id: number,
    date: string,
    time: string,
    duration: number,
  ) {
    return {
        id,
        date,
        time,
        duration,
    };
  }

function Row(props: { row: ReturnType<typeof CenterAppointment> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [showReport, setShowReport] = useState(false);

  const userId = JSON.parse(sessionStorage.getItem('id')!)

  const reserve = (id: any) => {
    setShowReport(true);
  };

  const closeReport = () => {
    setShowReport(false);
  };

  return (
    <Box sx={{ width: "680px", margin: "20px auto" }}>
      <BloodReportUser
        showReport={showReport}
        id={userId}
        close={closeReport}
      />
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.address}</TableCell>
          <TableCell>{row.averageRating}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Appointments
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Duration</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.appointments.map((appointment: any) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.duration}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => reserve(appointment.id)}
                            style={{ background: "#0d6efd", color: "white" }}
                          >
                            Reserve
                          </Button>
                          </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </Box>
  );
}

// const rows = [
//   CenterAppointment(0, "Poliklinika", "Bulevar Cara Lazara 2", 6, [
//     { id: 1, date: "2022-12-14", time: "12:00", duration: 30 },
//   ]),
// ];

const rows: { name: string; address: string; averageRating: number; appointments: any; }[] = []

export default function DoubleTableCenterAppointment() {

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const [centerRows, setCenterRows] = useState([]);
  const [appointmentRows, setAppointmentRows] = useState([]);

  const getData = async() => {
    axios
    .get(process.env.REACT_APP_API_URL + "/centerProfile/all", config)
    .then((res: any) => {
        setCenterRows(res.data)

        res.data.forEach((element: any) => {
            const tempArray: { id: number; date: string; time: string; duration: number; }[] = []

            axios
                .get(process.env.REACT_APP_API_URL + `/blood/all/center/${element.id}`, config)
                .then((res: any) => {
                    setAppointmentRows(res.data)
                    
                    
                    res.data.forEach((appointment: any) => {
                        tempArray.push(appointmentData(appointment.id,appointment.date,appointment.time,appointment.duration))
                        })
                });            

                rows.push(CenterAppointment(
                element.id,
                element.name,
                element.address,
                element.averageRating,
                tempArray
                )) 
          });

    });
  }

  useEffect(() => {
    getData()
  }, []);

  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row: any) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
