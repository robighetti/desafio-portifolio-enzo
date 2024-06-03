import styles from './contact.module.css'
import github from '../../assets/github_icon.svg'
import whatsapp from '../../assets/whatsapp_icon.svg'
import linkedin from '../../assets/linkedin_icon.svg'

export function Contact() {
    return(
        <div id="contact-me" className={styles.contact}>
            <div className={styles.sociallinks}>
                <a href="https://github.com/EnzoRibeiro0731"> <img src={github}/></a>
                <a href="https://wa.me/qr/WS3ME2TBGTA2E1"><img src={whatsapp}/></a>
                <a href="https://www.linkedin.com/in/ribeiroenzodev/"><img src={linkedin}/></a>
            </div>
        </div>
    )
}