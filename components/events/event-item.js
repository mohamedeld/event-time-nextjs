import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from "@/styles/events-item.module.css";
import Button from '@/ui/button';
import DateIcon from '@/public/icons/date-icon';
import AddressIcon from '@/public/icons/address-icon';
import ArrowRightIcon from '@/public/icons/arrow-right-icon';
export default function EventItem({item}) {
  const humanReadableData = new Date(item.date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year:'numeric'
  });
  const readableLocation = item.location.replace(', ','\n');
  return (
    <li className={classes.item}>
      <Image src={item.image} alt={item.title} className={classes['event-image']} width={100} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{humanReadableData}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{readableLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button href={`/events/${item.id}`}><span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  )
}
