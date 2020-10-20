import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


  const getdata = async () =>{


    const res = await fetch('https://api.pray.zone/v2/times/today.json?city=paris').then(
      
    (res) =>  res.json()
    
    )
    return res
  }

  export  const getStaticProps  = async ({params}) =>{

    const adan = await getdata()

    return {
      props : {adan}
    }

    
  }



export default function Home(props) {


  console.log(props.adan.results.datetime[0].times.Imsak);

  return (
    <div className='container'>

  <h1>{props.adan.results.datetime[0].times.Imsak}</h1>

        <h1> store app </h1>
        <Link href="/produits">


        <button type="button" class="btn btn-primary">Primary</button>
        </Link>


    </div>
  )
}
