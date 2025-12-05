import linkedin from '../../Assets/linkedin.png'
import mail from '../../Assets/mail.png'
function Footer()
{
    return(
        <footer>
            <section className='leftSide'>
            <h3 style={{lineHeight:"0.15"}}>Kaila Bryant | BS in Software Engineering</h3>
            <p>Villa Rica, Georgia</p>
            </section>
            <section className='rightSide'>
                <a href="https://www.linkedin.com/in/kaila-bryant-36a510239/" target="_blank">
                <button>
                    <img src={linkedin} style={{display:"grid", width:"2.5vw", justifySelf:"center"}}/>
                </button>
                </a>
                <a href="mailto:K.BRYANT45610@GMAIL.COM">
                    <button>
                        <img src={mail} style={{display:"grid", width:"2.5vw", justifySelf:"center"}}/>
                    </button>
                </a>
            </section>
        </footer>

    )
}
export default Footer;