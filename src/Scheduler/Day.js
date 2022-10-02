import React from 'react';

const Day = ({ day, sYear, sMonth }) => {
    const { date } = day;
    const toDay = new Date().getDate()-1;
    const toMonth = new Date().getMonth();
    const toYear = new Date().getFullYear();
    const startDay = new Date(sYear, sMonth).getDay();

return (
    <div 
    className={`px-2 py-6 m-1 bg-lime-300`} 
    style={{gridColumnStart: date===0? startDay+1:null, backgroundColor: date===toDay && sMonth===toMonth && sYear===toYear?'red':''}}>
        <h1>{date + 1}</h1>
    </div>
);
};

export default Day;