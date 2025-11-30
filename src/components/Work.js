import photo from '../blade.png';
import CaseStudy from './ProjThumbnail';

function Home() {

    return(
        <main className="work-main">
            <div className="intro-header">
                <img src={photo} alt="Profile"/>
                <div className="home-title">
                    <h1>Kaila Bryant</h1>
                    <p className="home-subtitle">A recent software engineering graduate who aspires to work in the UI/UX field.</p>
                </div>
            </div>

            <section className="home-projects">
                <aside className="spacer">
                </aside>
                <div className="content">
                    <h2>Featured Projects</h2>
                <div className="proj-list">
                    <CaseStudy
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