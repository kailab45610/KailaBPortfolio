import photo from "../../Assets/WIP.png"
import lemon from "../../components/LLemon/Assets/Lemon.png"
import hairday from "./HairDay/Assets/outcome.png"
import me from "../../Assets/ME.jpeg"
import CaseStudy from './ProjThumbnail'
import { Link } from 'react-router-dom'
function Home() {

    return(
        <main className="work-main" >
            <div className="intro-header">
                <img src= {me} alt="Profile"/>
                <div className="home-title">
                    <h1>Kaila Bryant</h1>
                    <p className="home-subtitle">A recent software engineering graduate who aspires to work in the UI/UX field.</p>
                    <section className='extra-nav'>
                        <Link to = "/about"><button>About Me</button></Link>
                        <Link to = "/visual"><button>Visual Designs</button></Link>
                        <Link to = "/contact"><button>Contact Me</button></Link>
                    </section>
                </div>
            </div>

            <section className="home-projects">
                <aside className="spacer">
                </aside>
                <div className="content">
                    <h2>Featured Projects</h2>
                <div className="proj-list">
                    <CaseStudy
                        page="/littlelemon"
                        image={lemon}
                        title="Little Lemon"
                        description="Mobile Web UI for the Reserve-a-Table function"
                    />
                    <CaseStudy
                        page="/hairday"
                        image={hairday}
                        title="HairDay"
                        description="A Salon Business Website"
                    />
                </div>
                </div>
            </section>


        </main>
    )
}
export default Home;