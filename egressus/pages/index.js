import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/header'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [indexLista, setindexLista] = useState(1)

  setInterval( function(){
    carrossel()
  }, 3000)

  const carrossel = () => {
    if(indexLista !== 3) {
      setindexLista(indexLista + 1)
        
  } else if(indexLista === 3) {
      setindexLista(1)  
}
}

  const passarCarrosselUm = () => {
    setindexLista(1)
  }

  const passarCarrosselDois = () => {
    setindexLista(2)
  }

  const passarCarrosselTres = () => {
    setindexLista(3)
  }

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

        {indexLista === 1 &&(
            <>
            <div className={styles.pontoUm} style={{backgroundColor:'#00996D'}}></div>
            <div className={styles.pontoDois} onClick={passarCarrosselDois}></div>
            <div className={styles.pontoTres} onClick={passarCarrosselTres}></div>
            
            </>
          )}
          
          {indexLista === 2 &&(
            <>
            <div className={styles.pontoUm} onClick={passarCarrosselUm}></div>
            <div className={styles.pontoDois} style={{backgroundColor:'#00996D'}}></div>
            <div className={styles.pontoTres} onClick={passarCarrosselTres}></div>
            
            </>
          )}
          
          {indexLista === 3 &&(
            <>
            <div className={styles.pontoUm} onClick={passarCarrosselUm}></div>
            <div className={styles.pontoDois} onClick={passarCarrosselDois}></div>
            <div className={styles.pontoTres} style={{backgroundColor:'#00996D'}}></div>
            
            </>
          )}
          
        </div>
      </main>
    </>
  )
}
