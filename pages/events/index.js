import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router';
import React from 'react'

export default function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  function handleFilterEvent(year,month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
    <EventSearch onSearch={handleFilterEvent}/>
      <EventList items={allEvents}/>
    </>
  )
}
