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

export default function TableCenter() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  useEffect(() => {
    (async () => {
      axios
        .get(process.env.REACT_APP_API_URL + "/centres", config)
        .then((res) => setData(res.data));
    })();
  }, []);

  const search = (searchText: string) => {
    if (searchText !== "") {
      axios
        .get(
          process.env.REACT_APP_API_URL + "/centres/search/" + searchText,
          config
        )
        .then((res) => setData(res.data))
        .catch((e) => alert("No Center Found!"));
    }
  };

  const reset = () => {
    setSearchText("");
    axios
      .get(process.env.REACT_APP_API_URL + "/centres", config)
      .then((res) => setData(res.data));
  };

  return (
    <>
      {data ? (
        <TableContainer
          style={{ width: "600px", margin: "20px auto" }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <TextField
                    id="standard-basic"
                    label="Search"
                    variant="standard"
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: "100%" }}
                    value={searchText}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => search(searchText)}>Search</Button>
                  <Button onClick={() => reset()}>
                    <RestartAltIcon />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell align="center">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell align="center">{row.averageRating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
}
