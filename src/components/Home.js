import photo from '../blade.png';
import CaseStudy from './ProjThumbnail';

function Home() {

    return(
        <main>
            <div className="home-header">
                <img src={photo} alt="Profile"/>
                <div className="home-title">
                    <h1>Kaila Bryant</h1>
                    <p className="home-subtitle">A recent software engineering graduate who aspires to work in the UI/UX field.</p>
                </div>
            </div>
            <section className="home-projects">
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
                </div>
            </section>

            <button className="project-directory">Go to All Projects</button>


        </main>
    )
}
export default Home;