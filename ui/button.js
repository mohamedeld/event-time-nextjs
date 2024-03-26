import Link from 'next/link'
import React from 'react'
import classes from "@/styles/button.module.css";

export default function Button({children,href}) {
  return (
    <Link href={href} className={classes.btn}>
      {children}
    </Link>
  )
}
