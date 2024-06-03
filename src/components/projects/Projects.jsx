import styles from './projects.module.css'
import logo from '../../assets/background.svg'

export function Projects (){
    return (
        <>
        <section id="projects" className={styles.projects}>
        <div className={styles.projectsheader}>
            <p>recent projects</p>
            <div className={styles.arrow}>&#8595;</div>
        </div>
        <div className={styles.projectsgrid}>
            <div className={styles.projectbox}>
                <img src={logo}></img>
            <a href="https://github.com/EnzoRibeiro0731/Calculadora-imc" className={styles.linkbutton1}>IMC Calculator</a>
            </div>
            <div className={styles.projectbox}>
            <img src={logo}></img>
            <a href="https://github.com/EnzoRibeiro0731/Hello-Azure" className={styles.linkbutton2}>Testing Azure</a>
            </div>
            <div className={styles.projectbox}>
            <img src={logo}></img>
            <a href="https://github.com/EnzoRibeiro0731/my-first-aspnet" className={styles.linkbutton3}>My First Aspnet</a>
            </div>
            <div className={styles.projectbox}>
            <img src={logo}></img>
            <a href="https://github.com/EnzoRibeiro0731/azure-2" className={styles.linkbutton4}>Another Azure Project</a>
            </div>
        </div>
    </section>
        </>
    )
}