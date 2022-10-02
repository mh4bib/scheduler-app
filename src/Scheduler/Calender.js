import React, { useReducer, useState } from 'react';
import Day from './Day';

function reducer(day, action){

}
const Calender = () => {
    const calender = [];
    const [date, setDate] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [calendr, setCalendr] = useReducer(reducer, calender)
    
    const totalDays = 32 - new Date(year, month, 32).getDate();
    for (let i = 0; i < totalDays; i++) {
        calender.push({date: i});

    }
    // console.log(calender);
    
    return (
        <div>
            {
                calender.map(day=><Day
                key={day.date}
                day={day}
                ></Day>)
            }
        </div>
    );
};

export default Calender;