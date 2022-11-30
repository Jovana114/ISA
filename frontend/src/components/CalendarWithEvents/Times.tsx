import React, { useEffect, useState } from "react";

interface props {
  date: string;
}

export default function Times({ date }: props) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        process.env.REACT_APP_API_URL + `/blood/all/${date}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              sessionStorage.getItem("token")!
            )}`,
          },
        }
      );
      const json = await data.json();
      if (json) setAppointments(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [date]);

  return appointments ? (
    <div className="row">
      {appointments.map((appointment: any, key) => (
        <div className="column" key={key}>
          <div className="card">
            <h6>{appointment.date}</h6>
            <p>
              Time: <b>{appointment.time}</b>
            </p>
            <p>
              Duration: <b>{appointment.duration}</b> mins
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="row">
      <div className="column-full">
        <div className="card-full">No Appointments Found!</div>
      </div>
    </div>
  );
}