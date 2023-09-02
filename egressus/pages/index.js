import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/header'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [imagem, setImagem] = useState('/images/imagem_um.png')
  const [indexLista, setindexLista] = useState(1)

  const carrossel = () => {
    if(indexLista !== 3) {
      setindexLista(indexLista + 1)
        
  } else if(indexLista === 3) {
      setindexLista(1)  
}
}
  
  setInterval(carrossel, 5000);

  return (
    <>
      <Header/>
      <main className={styles.mainHome}>
        <div className={styles.mainCarrossel}>

          {indexLista === 1 &&(
            <img src='/images/imagem_um.png'></img>
          )}
          
          {indexLista === 2 &&(
            <img src='/images/imagem_dois.jpg'></img>
          )}
          
          {indexLista === 3 &&(
            <img src='/images/imagem_tres.jpg'></img>
          )}
          
        </div>

        <div className={styles.ponto}>
          <div className={styles.pontoUm}></div>
          <div className={styles.pontoDois}></div>
          <div className={styles.pontoTres}></div>
        </div>
      </main>
    </>
  )
}
