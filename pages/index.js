import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Detail from '../components/Details/Detail'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Detail />
    </div>
  )
}
