import '../styles/Illustration.css'
import poney from '../assets/poney.jpg'
import inu from '../assets/inu.jpg'
import ham from '../assets/hamham.jpg'
import arrow from '../assets/arrow.svg'

function Illustration() {

    return (
        <div className='Illustration'>
            <div className='image-illustration'>
                <div className="blurry">
                    <p className='Illustration-text'>Soins Très Attentionnés</p>
                    <div className='Illustration-card'>
                        <div className='card-top'>
                            <div className='animals'>
                                <div className='circle' id='poney'>
                                    <img src={poney} alt="poney" />
                                </div>
                                <div className='circle' id='inu'>
                                    <img src={inu} alt="inu" />
                                </div>
                                <div className='circle' id='ham'>
                                    <img src={ham} alt="ham" />
                                </div>
                            </div>
                            <div className='arrow-button'>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                        <div className='card-bottom'>
                            Qu’ils Soient Tout Petit Ou Très Grand, On Prend En Charge Toutes Vos Animaux Sans Aucune Distinction
                        </div>
                    </div>
                </div>
                <div className="image"></div>
            </div>
        </div>
    )
}

export default Illustration