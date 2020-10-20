import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'





export default function Home(props) {



  return (
    <div className='container'>



        <h1> Créez votre boutique en ligne </h1>
        <Link href="/produits/produits">


        <button type="button" class="btn btn-primary">Primary</button>
        </Link>


    </div>
  )
}
