import React, { useContext } from 'react'
import MainHeader from './main-header'
import Notification from '../notifications/notification'
import NotificationContext from '@/store/notificationContext'

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      <main>
        {children}
        {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />}
      </main>
    </>
  )
}
