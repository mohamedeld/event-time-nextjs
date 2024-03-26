import React from 'react'
import classes from "@/styles/events-list.module.css"
import EventItem from './event-item'
export default function EventList({items}) {
  return (
    <ul className={classes.list}>
      {items && items.map(item=>{
        return (
          <EventItem key={item.id} item={item}/>
        )
      })}
    </ul>
  )
}
