'use client'
import SmallBanner from '@/components/SmallBanner'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import BillBord from '@/components/billbord/BillBord'
import Slider from '@/components/firstSlider/Slider'
export default function Home() {
  return (
    <main className={styles.main}>
    <SmallBanner/>
    <NavBar/>
    <BillBord/>
    <Slider/>
    </main>
  )
}

