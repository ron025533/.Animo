import '../styles/Animo.css'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Navigation() {

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.to('#contact-one', {
      yPercent: -310,
      duration: 0.8
    })

    gsap.to('#contact-two', {
      yPercent: -310,
      duration: 0.8
    })
  })

  return (
    <div className='Navigation'>
      <div className='logo'>
        <span>. </span>Animo
      </div>
      <div className="right-nav">
        <div className='navigation-text'>
          <div className="text"><p id='selected'>Accueil</p></div>
          <div className="text"><p>Services</p></div>
          <div className="text"><p>Projets</p></div>
        </div>
        <div className="contact-button">
          <p className='contact-text' id='contact-one'>Contacter</p>
          <p className='contact-text' id='contact-two'>Contacter</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation