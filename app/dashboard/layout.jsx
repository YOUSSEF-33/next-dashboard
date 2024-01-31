import styles from '../ui/dashboard/dashboard.module.css';
import Sidebar from '../ui/dashboard/sidebar/Sidebar';
import Navbar from '../ui/dashboard/navbar/Navbar';
import Footer from "../ui/dashboard/footer/Footer";
import { auth } from '../auth';

export const metadata = {
  title: 'Dashboard',
  description: 'Controle and Access to your bissness',
}

export default async function Layout({ children }) {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar session={session}/>
      </div>
      <div className={styles.navbar}>
        <Navbar/>
         {children}
        <Footer/>
      </div>
    </div>
  )
}