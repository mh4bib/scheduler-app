import React from 'react';

const Day = ({day, year, month}) => {
     const {date} = day;
    //  const startDay = `col-start-${(new Date(year, month)).getDay()+1}`;
    // console.log(startDay);
    return (
        <div className={`px-4 py-10 m-1 bg-lime-300 ${date===0?`col-start-${(new Date(year, month)).getDay()+1}`:''}`}>
            <h1>{date+1}</h1>
        </div>
    );
};

export default Day;