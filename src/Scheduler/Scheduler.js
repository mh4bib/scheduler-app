import React from 'react';
import Calender from './Calender';
import EventBar from './EventBar';

const Scheduler = () => {
    return (
        <div className='grid grid-cols-4'>
            <Calender></Calender>
            <EventBar></EventBar>
        </div>
    );
};

export default Scheduler;