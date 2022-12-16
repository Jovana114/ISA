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
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

interface RegistertedUsersProps {
  open: boolean;
  onClose: () => void;
}

interface Data {
  firstname: string;
  lastname: string;
  date_when_blood_was_donated: string;
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
    id: "firstname",
    numeric: false,
    disablePadding: true,
    label: "Firstname",
  },
  {
    id: "lastname",
    numeric: false,
    disablePadding: false,
    label: "Lastname",
  },
  {
    id: "date_when_blood_was_donated",
    numeric: true,
    disablePadding: false,
    label: "Date when blood was donated",
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

export default function RegistertedUsers({ open, onClose }: RegistertedUsersProps) {

    const [data, setData] = useState([]);
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("firstname");
    const [rows, setRows] = useState([]);
  
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
      },
    };

    const handleClose = () => {
        onClose();
    };

    const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: keyof Data
    ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
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
                data.map((row: any, _key) => (
                  <TableRow
                    key={_key}
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
                )
              )};
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
  