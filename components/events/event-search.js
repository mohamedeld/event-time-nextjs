import Button from '@/ui/button'
import React, { useRef } from 'react'
import classes from "@/styles/events-search.module.css";

export default function EventSearch({onSearch}) {
  const yearInput = useRef();
  const monthInput = useRef();
  function handleSubmit(event){
    event.preventDefault();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInput.current.value;
    
    onSearch(selectedYear,selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
        <label htmlFor='month'>Month</label>
        <select id="month" ref={monthInput}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Filter</Button>
    </form>
  )
}
