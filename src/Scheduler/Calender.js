import React, { useReducer, useState } from 'react';
import Day from './Day';

function reducer(day, action) {

}
const Calender = () => {
    const calender = [];
    const [sDate, setSdate] = useState(new Date().getDate());
    const [sMonth, setSmonth] = useState(new Date().getMonth());
    const [sYear, setSyear] = useState(new Date().getFullYear());
    const [calendr, setCalendr] = useReducer(reducer, calender)

    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const months = ['january', 'february', 'march', 'april', 'may', 'jun', 'july', 'august', 'september', 'october', 'november', 'december']
    const totalDays = 32 - new Date(sYear, sMonth, 32).getDate();
    for (let i = 0; i < totalDays; i++) {
        calender.push({ date: i });

    }
    // console.log(calender);

    function next() {
        const year = (sMonth === 11) ? sYear + 1 : sYear;
        const month = (sMonth + 1) % 12;
        setSyear(year);
        setSmonth(month);
    }

    function previous() {
        const year = (sMonth === 0) ? sYear - 1 : sYear;
        const month = (sMonth === 0) ? 11 : sMonth - 1;
        setSyear(year);
        setSmonth(month);
    }

    return (
        <div className='col-span-3'>
            <div>
                <button onClick={previous}>previous</button>
                <span className='uppercase'> {months[sMonth]}, {sYear} </span>
                <button onClick={next}>next</button>
            </div>
            <div className='grid grid-cols-7'>
                {
                    days.map((day, index) => <h3
                        className='p-4 m-1 bg-orange-300'
                        key={index}>{day}</h3>)
                }
                {
                    calender.map(day => <Day
                        key={day.date}
                        day={day}
                        sYear={sYear}
                        sMonth={sMonth}
                    ></Day>)
                }
            </div>
        </div>
    );
};

export default Calender;