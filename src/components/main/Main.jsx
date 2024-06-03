import styles from './main.module.css'
import enzo from '../../assets/me.jpeg'

export function Main() {
    return (
        <>
            <main>
        <div className={styles.intro}>
            <h1>Welcome to Enzo Ribeiro's interactive repository</h1>
            <p>This webpage is dedicated to presenting myself as someone seeking opportunities in the programming job market!</p>
        </div>
        <div className={styles.circle}><img src={enzo} alt="" /></div>
    </main>
        </>
    )
}