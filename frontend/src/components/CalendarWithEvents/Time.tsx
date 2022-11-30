import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./style.css";
import Times from "./Times";

interface props {
  showTime: boolean;
  date: string;
}

export default function Time({ showTime, date }: props) {
  return (
    <div>
      <div>{showTime ? <Times date={date} /> : null}</div>
    </div>
  );
}
