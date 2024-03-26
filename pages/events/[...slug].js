import EventItem from '@/components/events/event-item';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
import React from 'react'

export default function FilterEventPage() {
  const router = useRouter();
  const [year,month] = router.query.slug;
  if(!year || !month){
    return <p className='center'>Loading ....</p>
  }
  const yearNum = +year;
  const monthNum = +month;
  if(isNaN(year) || isNaN(month)){
    return <p className='center'>Invalid filter...</p>
  }
  
  const getFilterEvents = getFilteredEvents({
    year:yearNum,
    month:monthNum
  });
 
  return (
    <>
      {getFilterEvents && getFilterEvents.length > 0 ? getFilterEvents.map(item=>{
        return (
          <EventItem key={item.id} item={item}/>
        )
      }):<p className='center'>There are no matched item</p>}
    </>
  )
}
