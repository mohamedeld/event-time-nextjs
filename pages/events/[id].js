import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router'
import React from 'react'

export default function EventDetailPage() {
  const router = useRouter();
  const {id} = router.query;
 const event = getEventById(id);
 if(!event || !id){
  return <p>Not Found event with this id {id}</p>
 }
  return (
    <>
      <EventSummary/>
      <EventLogistics date={event.date} address={event.location} imageAlt={event.title} image={event.image}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}
