'use client'
import SmallBanner from '@/components/SmallBanner'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import BillBord from '@/components/billbord/BillBord'
import Slider from '@/components/firstSlider/Slider'
import WarmUp from '@/components/warmup/WarmUp'
import SkinProduct from '@/components/skinproduct/SkinProduct'
import PostPoo from '@/components/warmup/PostPoo'
import StoreLoc from '@/components/storelocator/StoreLoc'
export default function Home() {
  return (
    <main className={styles.main}>
    <SmallBanner/>
    <NavBar/>
    <BillBord/>
    <Slider/>
    <WarmUp/>
    <SkinProduct/>
    <PostPoo/>
    <SkinProduct/>
    <StoreLoc/>
    </main>
  )
}

