import { useRouter } from 'next/router'
import React from 'react'

export default function EventDetailPage() {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
  return (
    <div>EventDetailPage</div>
  )
}
