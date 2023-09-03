import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import Image from "next/image";

export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src='/images/Logo principal Egressus.png' width='150' height='60'></Image>
            </div>

            <div className={styles.lista}>
                <ul>
                    <li>
                        <Link href='#'>
                            INSTITUIÇÕES
                        </Link>
                    </li>

                    <li>
                        <Link href='#'>
                            EVENTOS
                        </Link>
                    </li>

                    <li>
                        <Link href='#'>
                            
                            PORTAL DE OPORTUNIDADES
                        </Link>
                    </li>

                    <li>
                        <Link href='#'>
                            FORMATURA
                        </Link>
                    </li>
                    
                    <li className={styles.dropMenu}>
                        <Link href='#'>
                            ADMINISTRADOR
                        </Link>

                        <div className={styles.icon}></div>

                        <ul>
                            <li>
                                <Link href='#'>
                                    Minha Turma
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={styles.usuario}>
                <div className={styles.usuarioConfiguracoes}>
                    <div className={styles.usuarioConfiguracoesIcon}></div>
                </div>

                <div className={styles.usuarioNotificacoes}>
                    <div className={styles.usuarioNotificacoesIcon}></div>
                </div>

                <div className={styles.usuarioPerfil}>
                    <div className={styles.usuarioPerfilIcon}>
                        <p>d</p>
                    </div>
                </div>
            </div>

        </header>
    )
}