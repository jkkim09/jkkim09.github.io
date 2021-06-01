import classNames from 'classnames'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import events from "../data/events";

import CalendarStyle from '../styles/scss/Calendar.module.scss';

const Calender = () => {
    return (
        <div className={classNames([CalendarStyle.main])}>
            <h1 className={classNames([CalendarStyle.title])}>{'[JK 일정 관리]'}</h1>
            <FullCalendar
                defaultView="dayGridMonth"
                header={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                plugins={[dayGridPlugin, timeGridPlugin]}
                events={events}
            />
        </div>
    )
}

export default Calender