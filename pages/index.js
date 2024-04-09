import { Inter } from "next/font/google";

import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helpers/utils-events";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  
  return (
    <>
      <EventList items={props.events}/>
    </>
  );
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();
  return {
    props:{
      events:allEvents
    }
  }
}