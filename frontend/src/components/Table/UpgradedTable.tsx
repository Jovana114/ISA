import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Range, getTrackBackground } from "react-range";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import axios from "axios";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { parsePath } from "react-router-dom";
import BloodReportUser from "../BloodReportUser/BloodReportUser";

interface Data {
  id: number;
  name: string;
  address: string;
  averageRating: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "Address",
  },
  {
    id: "averageRating",
    numeric: true,
    disablePadding: false,
    label: "Rating",
  },
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "Reserve",
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.numeric ? "right" : "left"}
          padding={headCell.disablePadding ? "none" : "normal"}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : "asc"}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
}

export default function UpgradedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setRows] = useState([]);
  const [appointments, setAppointments] = useState([])
  const [searchText, setSearchText] = useState("");

  // FOR APPOINTMENT
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [time, setTime] = React.useState<Dayjs | null>(null);
  const [filteredDate, setFilteredDate] = useState("");
  const [filteredTime, setFilteredTime] = useState("");

  const [showReport, setShowReport] = useState(false);
  const [userId, setUserId] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  useEffect(() => {
    (async () => {
      axios
        .get(process.env.REACT_APP_API_URL + "/centerProfile/all", config)
        .then((res) => setRows(res.data));
    })();

    if (JSON.parse(sessionStorage.getItem("id")!) !== null || undefined)
      setShowFilters(true);
  }, [showFilters]);

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
          .then((res) => setRows(res.data))
          .catch((e) => alert("No Center Found!"));
      } else {
        axios
          .get(
            process.env.REACT_APP_API_URL +
              "/centerProfile/all/search/" +
              searchText,
            config
          )
          .then((res) => setRows(res.data))
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
        .then((res) => setRows(res.data))
        .catch((e) => alert("No Center Found!"));
    }
  };

  const reset = () => {
    setSearchText("");
    setChecked(false);
    setState([5]);
    axios
      .get(process.env.REACT_APP_API_URL + "/centerProfile/all", config)
      .then((res) => setRows(res.data));
  };
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const STEP = 1;
  const MIN = 0;
  const MAX = 10;

  const [checked, setChecked] = useState(false);
  const [state, setState] = useState([5]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
        .then((res) => setRows(res.data))
        .catch((e) => alert("No Center Found!"));
    }
  };

  const reserve = (id: any) => {
    setShowReport(true);
    setUserId(id);
  };

  const closeReport = () => {
    setShowReport(false);
    setUserId(0);
  };

  return (
    <>
      <Box sx={{ width: "680px", margin: "20px auto" }}>
        <BloodReportUser
          showReport={showReport}
          id={userId}
          close={closeReport}
        />
        <Paper sx={{ width: "auto", mb: 2 }}>
          {/* <EnhancedTableToolbar /> */}
          <TableContainer style={{ width: "680px", padding: "20px" }}>
            <Table sx={{ width: "640px" }} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                      disabled={!showFilters}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
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

                {showFilters ? (
                  <TableRow>
                      <TableCell colSpan={4} padding="none">
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <TableRow>
                            <TableCell
                              colSpan={1}
                              style={{ paddingLeft: "0", width: "200px" }}
                            >
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
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </LocalizationProvider>
                            </TableCell>
                            <TableCell
                              colSpan={1}
                              style={{ paddingLeft: "0", width: "200px" }}
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
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
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
                            <TableCell>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={checked}
                                      onChange={handleChange}
                                      inputProps={{ "aria-label": "controlled" }}
                                    />
                                  }
                                  label="Enable Filter"
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
                                  renderTrack={({
                                    props,
                                    children,
                                    disabled,
                                  }) => (
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
                            <TableCell>{state}</TableCell>
                          </TableRow>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <></>
                )}

                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
              </TableHead>
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow hover tabIndex={-1} key={row.id}>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="right">{row.averageRating}</TableCell>
                        <TableCell align="right">
                          <Button
                            onClick={() => reserve(row.id)}
                            style={{ background: `${!showFilters ? 'gray' : '#0d6efd'}`, color: "white" }}
                            disabled={!showFilters}
                          >
                            Reserve
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{}}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ width: "600px" }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
