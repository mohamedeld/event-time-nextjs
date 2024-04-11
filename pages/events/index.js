import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { getAllEvents } from '@/helpers/utils-events';

import { useRouter } from 'next/router';
import React from 'react'

export default function AllEventsPage(props) {
  
  const router = useRouter();
  function handleFilterEvent(year,month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
    <EventSearch onSearch={handleFilterEvent}/>
      <EventList items={props.events}/>
    </>
  )
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();
  return {
    props:{
      events:allEvents
    },
    revalidate:60
  }
}