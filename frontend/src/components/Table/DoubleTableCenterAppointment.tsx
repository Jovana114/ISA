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
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Range, getTrackBackground } from "react-range";
import BloodReportUser from "../BloodReportUser/BloodReportUser";
import BloodReport from "../BloodReport/BloodReport";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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
  duration: number
) {
  return {
    id,
    date,
    time,
    duration,
  };
}

var ap = 0;

function Row(props: { row: ReturnType<typeof CenterAppointment>}) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const reserve = (id: any) => {
    showReport = true;
    ap = id;
  };

  return (
    <>
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
    </>
  );
}

const rows: {
  name: string;
  address: string;
  averageRating: number;
  appointments: any;
}[] = [];

var showReport = false;

const closeReport = () => {
  showReport = false;
};

export default function DoubleTableCenterAppointment() {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  const [centerRows, setCenterRows] = useState([]);
  const [appointmentRows, setAppointmentRows] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [appId, setAppointmentId] = useState(0);

  // FOR APPOINTMENT
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [time, setTime] = React.useState<Dayjs | null>(null);
  const [filteredDate, setFilteredDate] = useState("");
  const [filteredTime, setFilteredTime] = useState("");

  const [open, setOpen] = React.useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [checked, setChecked] = useState(false);
  const [state, setState] = useState([5]);

  const STEP = 1;
  const MIN = 0;
  const MAX = 10;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const forEachElem = (res: any) => {
    rows.splice(0,rows.length);
    res.data.forEach((element: any) => {
      const tempArray: {
        id: number;
        date: string;
        time: string;
        duration: number;
      }[] = [];

      axios
        .get(
          process.env.REACT_APP_API_URL + `/blood/all/center/${element.id}`,
          config
        )
        .then((res: any) => {
          setAppointmentRows(res.data);

          res.data.forEach((appointment: any) => {
            tempArray.push(
              appointmentData(
                appointment.id,
                appointment.date,
                appointment.time,
                appointment.duration
              )
            );
          });
        });

      rows.push(
        CenterAppointment(
          element.id,
          element.name,
          element.address,
          element.averageRating,
          tempArray
        )
      );
    });
  }

  const getData = async () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/centerProfile/all", config)
      .then((res: any) => {
        setCenterRows(res.data);
        forEachElem(res)
      });
  };

  const search = (searchText: string) => {
    if (searchText !== "") {
      if (checked) {
        axios
          .get(
            process.env.REACT_APP_API_URL +
              "/centerProfile/all/search/" +
              searchText +
              "/" +
              state,
            config
          )
          .then((res) => {
            setCenterRows(res.data)
            forEachElem(res)
          })
          .catch((e) => alert("No Center Found!"));
      } else {
        axios
          .get(
            process.env.REACT_APP_API_URL +
              "/centerProfile/all/search/" +
              searchText,
            config
          )
          .then((res) => {
            setCenterRows(res.data)
            forEachElem(res)
          })
          .catch((e) => alert("No Center Found!"));
      }
    } else if (checked) {
      axios
        .get(
          process.env.REACT_APP_API_URL +
            "/centerProfile/all/search-rating/" +
            state,
          config
        )
        .then((res) => {
          setCenterRows(res.data)
          forEachElem(res)
        })
        .catch((e) => alert("No Center Found!"));
    }
  };

  const findAppointment = () => {
    if (filteredDate && filteredTime) {
      // Time
      var fTime = filteredTime.split(":");
      var fTimeH: number = Number(fTime[0]) + 1;
      var fTimeHToStr;
      if (fTimeH < 10) fTimeHToStr = "0" + fTimeH + ":" + fTime[1];
      else fTimeHToStr = fTimeH + ":" + fTime[1];

      // Date
      var fDate = filteredDate.substring(1).split("-");
      var fDateD: number = Number(fDate[2]) + 1;
      var fDateDToStr;
      if (fDateD < 10)
        fDateDToStr = fDate[0] + "-" + fDate[1] + "-" + "0" + fDateD;
      else fDateDToStr = fDate[0] + "-" + fDate[1] + "-" + fDateD;

      // console.log(fDateDToStr, fTimeHToStr);

      axios
        .get(
          process.env.REACT_APP_API_URL +
            "/user/blood-appointment/find/" +
            fDateDToStr +
            "/" +
            fTimeHToStr,
          config
        )
        .then((res) => {
          setCenterRows(res.data)
          forEachElem(res)
        })
        .catch((e) => alert("No Center Found!"));
    }
  };

  const reset = () => {
    setSearchText("");
    setChecked(false);
    setState([5]);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "680px", margin: "20px auto" }}>
      
      <BloodReportUser
        showReport={showReport}
        id={ap}
        close={closeReport}
      />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                  disabled={!showFilters}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell colSpan={2} style={{ padding: "0" }}>
                <TextField
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{ width: "100%" }}
                  value={searchText}
                />
              </TableCell>
              <TableCell colSpan={2} style={{ padding: "0 10px" }}>
                <Button onClick={() => search(searchText)}>Search</Button>
                <Button onClick={() => reset()}>
                  <RestartAltIcon />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} padding="none">
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          colSpan={1}
                          style={{ paddingLeft: "20px", width: "250px" }}
                        >
                          <>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Appointment Date"
                              value={date}
                              onChange={(newValue: any) => {
                                setDate(newValue);
                                setFilteredDate(
                                  JSON.stringify(newValue).split("T")[0]
                                );

                                // setFilteredDate(newValue.replace("/", "-"));
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                          
                          </>
                        </TableCell>
                        <TableCell
                          colSpan={1}
                          style={{ paddingLeft: "0", width: "250px" }}
                        >
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
                        </TableCell>
                        <TableCell colSpan={2} style={{ padding: "0 10px" }}>
                          <Button onClick={findAppointment}>Find</Button>
                          <Button onClick={() => reset()}>
                            <RestartAltIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={handleChange}
                                  inputProps={{ "aria-label": "controlled" }}
                                />
                              }
                              label={`Enable Filter ${state}`}
                            />
                          </FormGroup>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexWrap: "wrap",
                              margin: "5px auto",
                            }}
                          >
                            <Range
                              step={STEP}
                              min={MIN}
                              max={MAX}
                              values={state}
                              onChange={(values) => setState(values)}
                              disabled={checked ? false : true}
                              renderTrack={({ props, children, disabled }) => (
                                <div
                                  {...props}
                                  style={{
                                    ...props.style,
                                    height: "6px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                      values: state,
                                      colors: ["#548BF4", "#ccc"],
                                      min: MIN,
                                      max: MAX,
                                    }),
                                    alignSelf: "center",
                                  }}
                                >
                                  {children}
                                </div>
                              )}
                              renderThumb={({ props, isDragged }) => (
                                <div
                                  {...props}
                                  style={{
                                    ...props.style,
                                    height: "42px",
                                    width: "42px",
                                    borderRadius: "4px",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6xp #AAA",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "16px",
                                      width: "5px",
                                      backgroundColor: isDragged
                                        ? "#548BF4"
                                        : "#CCC",
                                    }}
                                  ></div>
                                </div>
                              )}
                            />
                          </div>
                        </TableCell>
                        {/* <TableCell></TableCell> */}
                      </TableRow>
                    </TableHead>
                  </Table>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <Row key={row.name + row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}