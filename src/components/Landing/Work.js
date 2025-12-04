import photo from "../../Assets/WIP.png"
import CaseStudy from './ProjThumbnail';
import { Link } from 'react-router-dom';
function Home() {

    return(
        <main className="work-main" >
            <div className="intro-header">
                <img src={photo} alt="Profile" style={{width: "300px"}}/>
                <div className="home-title">
                    <h1>Kaila Bryant</h1>
                    <p className="home-subtitle">A recent software engineering graduate who aspires to work in the UI/UX field.</p>
                    <section className='extra-nav'>
                        <Link to = "/about"><button>More About Me</button></Link>
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
                        image={photo}
                        title="Project One"
                        description="Description for Project One."
                    />
                    <CaseStudy
                        image={photo}
                        title="Project Two"
                        description="Description for Project Two."
                    />
                    <CaseStudy
                        image={photo}
                        title="Project Three"
                        description="Description for Project Three."
                    />
                     <CaseStudy
                        image={photo}
                        title="Project Three"
                        description="Description for Project Three."
                    /><CaseStudy
                        image={photo}
                        title="Project Three"
                        description="Description for Project Three."
                    /><CaseStudy
                        image={photo}
                        title="Project Three"
                        description="Description for Project Three."
                    />
                </div>
                </div>
            </section>


        </main>
    )
}
export default Home;