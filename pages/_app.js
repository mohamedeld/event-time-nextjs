import Layout from "@/components/layout/Layout";
import Notification from "@/components/notifications/notification";
import { NotificationContextProvider } from "@/store/notificationContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    </NotificationContextProvider>
  )
}
