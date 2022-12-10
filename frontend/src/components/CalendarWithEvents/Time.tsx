import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./style.css";
import Times from "./Times";

interface props {
  showTime: boolean;
  id: number;
  date: string;
}

export default function Time({ showTime, id, date }: props) {
  return (
    <div>
      <div>{showTime ? <Times id={id} date={ date} /> : null}</div>
    </div>
  );
}
