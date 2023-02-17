import React from "react";

function Calendar({ date }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const rows = [];
  let cells = [];
  let day = 1;
  let i, j;

  // Generate cells for days of the week row
  cells = daysOfWeek.map((dayOfWeek) => <th key={dayOfWeek}>{dayOfWeek}</th>);
  rows.push(<tr key="daysOfWeek">{cells}</tr>);

  // Generate cells for days of the month
  for (i = 0; i < 6; i++) {
    cells = [];
    for (j = 0; j < 7; j++) {
      const classes = [];
      if (day <= daysInMonth && (i > 0 || j >= firstDayOfMonth.getDay())) {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        if (currentDate.toDateString() === date.toDateString()) {
          classes.push("today");
        }
        cells.push(
          <td key={currentDate} className={classes.join(" ")}>
            {day}
          </td>
        );
        day++;
      } else {
        cells.push(<td key={`${i}-${j}`} className="empty"></td>);
      }
    }
    rows.push(<tr key={i}>{cells}</tr>);
    if (day > daysInMonth) {
      break;
    }
  }
  // Return the calendar component
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="7">
            {date.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Calendar;
