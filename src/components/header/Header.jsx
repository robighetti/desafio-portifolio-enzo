import styles from './header.module.css'

export function Header() {
    return (
        <><header id="home" className={styles.header}>
            <nav>
                <ul className={styles.navlist}>
                    <li className={styles.navitem}><a href="#home" className={styles.navlink}>home</a></li>
                    <li className={styles.navitem}><a href="#projects" className={styles.navlink}>projects</a></li>
                    <li className={styles.navitem}><a href="#about-me" className={styles.navlink}>about me</a></li>
                    <li className={styles.navitem}><a href="#contact-me" className={styles.navlink}>contact me</a></li>
                </ul>
            </nav>
            </header>
            </>
    )
}