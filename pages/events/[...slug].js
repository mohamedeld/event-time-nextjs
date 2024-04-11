import EventItem from '@/components/events/event-item';
import ResultsTitle from '@/components/result-title/results-title';
import { getFilteredEvents } from '@/helpers/utils-events';

import React from 'react'

export default function FilterEventPage(props) {
  if(props.hasError){
    return <p>Something went wrong....</p>
  }
  const date = new Date(props.date.year,props.date.month - 1);
  
  return (
    <>
    <ResultsTitle date={date} />
      {props.events && props.events.length > 0 ? props.events.map(item=>{
        return (
          <EventItem key={item.id} item={item}/>
        )
      }):<p className='center'>There are no matched item</p>}
    </>
  )
}

export async function getServerSideProps(context){
  const {params} = context;
  const filterData = params.slug;

  const year = filterData[0];
  const month = filterData[1];

  if(!year || !month){
    return {
      hasError:true
    }
  }
  const yearNum = +year;
  const monthNum = +month;
  if(isNaN(year) || isNaN(month)){
    return {
      hasError:true
    }
  }
  
  const getFilterEvents = await getFilteredEvents({
    year:yearNum,
    month:monthNum
  });
  
  return {
    props:{
      events:getFilterEvents,
      date:{
        year:yearNum,
        month:monthNum
      }
    }
  }
}