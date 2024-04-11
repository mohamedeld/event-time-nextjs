import { Inter } from "next/font/google";
import Head from "next/head";
import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helpers/utils-events";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="all events in the home page" />
      </Head>
        <NewsletterRegistration/>
      <EventList items={props.events}/>
    </div>
  );
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();
  return {
    props:{
      events:allEvents
    },
    revalidate:1800
  }
}