import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import Comments from '@/components/input/comments';
import { getAllEvents, getEventById } from '@/helpers/utils-events';

import React from 'react'

export default function EventDetailPage(props) {
  
  
  const event = props.event;
 if(!event){
  return <p>Not Found event with this id {event.id}</p>
 }
  return (
    <>
      <EventSummary/>
      <EventLogistics date={event.date} address={event.location} imageAlt={event.title} image={event.image}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id}/>
    </>
  )
}
export async function getStaticProps(context){
  const eventId = context.params.id;
  const event = await getEventById(eventId);
  return {
    props:{
      event:event
    },
    revalidate:30
  }
}
export async function getStaticPaths(){
  const allEvents = await getAllEvents();
  const paths = allEvents.map(event=> ({params:{id:event.id}}));
  return {
    paths:paths,
    fallback:false
  }
}