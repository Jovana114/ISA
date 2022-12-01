import React, { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./style.css";
import Time from "./Time";

export default function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {}, [date]);

  const formatDate = (d: any) => {
    return (
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate())
    );
  };

  return (
    <div>
      <div className="calendar-container">
        <div className="row">
          <div className="column-full">
            <div className="card-full">{date.toLocaleDateString("en-US")}</div>
          </div>
        </div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <Time showTime={showTime} date={formatDate(date)} />
    </div>
  );
}
