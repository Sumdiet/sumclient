import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { HomeContext } from '../../Context/HomeContext';


export default function Calendar(props: any) {
  const { setDate, setReload, reload } = React.useContext(HomeContext);
  const handleDateClick = (arg: { dateStr: any }) => { // bind with an arrow function
    setDate(arg.dateStr);
    setReload(!reload);
  }
  return (
    <FullCalendar
      
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
    />
  )
}