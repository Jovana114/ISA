import React, { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import CircularLoader from "../Loader/CircularLoader";
import "./style.css";
import Time from "./Time";

export default function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(true);
  const [centreId, setCentreId] = useState(0)

  const token = JSON.parse(sessionStorage.getItem("token")!);
  let id = JSON.parse(sessionStorage.getItem("id")!);

  const getCentreData = () =>{
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      process.env.REACT_APP_API_URL + `/user/getCentreByUserId/${id}`,
      requestOptions
    ).then(response => {
      return response.json()
    }).then(data => {
      // console.log(data);
      setCentreId(data.id)
    
      sessionStorage.setItem("centerId", JSON.stringify(data.id));
    })
  }

  useEffect(() => {
    getCentreData()
  },[centreId]);

  const formatDate = (d: any) => {
    return (
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate())
    );
  };

  return centreId ? (

    <div>
      <div className="calendar-container">
        <div className="row">
          <div className="column-full">
            <div className="card-full">{date.toLocaleDateString("en-US")}</div>
          </div>
        </div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <Time showTime={showTime} id={centreId} date={formatDate(date)} />
    </div>
  ) : (<CircularLoader />)
}
