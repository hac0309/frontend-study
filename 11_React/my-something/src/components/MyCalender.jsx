import { useEffect, useState } from "react";

function MyCalendar() {
  const [date, setDate] = useState(null);
  const [week, setWeek] = useState([]);

  useEffect(() => {
    let now = new Date();
    let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let weekArr = makeWeekArr(currentDate);
    setDate(currentDate);
    setWeek(weekArr);
  }, []);

  const makeWeekArr = (date) => {
    let day = date.getDay();
    let week = [];
    for (let i = 0; i < 7; i++) {
      let newDate = new Date(date.valueOf() + 86400000 * (i - day));
      week.push([i, newDate]);
    }
    return week;
  };

  const onPressArrowLeft = () => {
    if (date) {
      let newDate = new Date(date.valueOf() - 86400000 * 7);
      let newWeek = makeWeekArr(newDate);
      setDate(newDate);
      setWeek(newWeek);
    }
  };

  const onPressArrowRight = () => {
    if (date) {
      let newDate = new Date(date.valueOf() + 86400000 * 7);
      let newWeek = makeWeekArr(newDate);
      setDate(newDate);
      setWeek(newWeek);
    }
  };

  return (
      <div>
        <h1>Calendar</h1>
        <button onClick={onPressArrowLeft}>Left</button>
        <button onClick={onPressArrowRight}>Right</button>
        <p>Current Date: {date ? date.toDateString() : 'Loading...'}</p>
        <ul>
          {week.map(([i, date]) => (
            <li key={i}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
  );
};

export default MyCalendar;