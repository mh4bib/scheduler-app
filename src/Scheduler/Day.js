import React from 'react';

const Day = ({day}) => {
     const {date} = day;
    return (
        <div>
            <h1>{date}</h1>
        </div>
    );
};

export default Day;