import styles from './infos.module.css'
import jslogo from '../../assets/javascript.svg'
import csharp from '../../assets/csharp.svg'
import react from '../../assets/react.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import azure from '../../assets/azure.svg'


export function Infos() {
    return (
        <>
         <div id="about-me" className={styles.container}>
      <div className={styles.knowledge}>
        <h2>Basic knowledge of:</h2>
        <ul>
           <div className='logos'>
            <img src={jslogo}/>
            <img src={csharp}/>
            <img src={react}/>
            <img src={html}/>
            <img src={css}/>
            <img src={azure}/>
            </div>
          
        </ul>
      </div>
      <div className={styles.aboutme}>
        <h2>About me</h2>
        <p>I am a creative person, attentive to details, and an excellent communicator. I always strive to understand the needs and desires of others to ensure their projects are executed as expected!</p>
      </div>
      </div>
      </>
    )
}