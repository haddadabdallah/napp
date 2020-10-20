import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='container'>
      
        <h1> store app </h1>
        <Link href="/produits">
        <button type="button" class="btn btn-primary">Primary</button>
        </Link>


    </div>
  )
}
