import photo from '../blade.png'
import Values from './Values';
function About() {
    return(
        <main>
            <div className="about-header">
                <div className="about-title">
                    <h1>About Me</h1>
                    <p>Description</p>
                </div>
                <img src={photo}/>
                <div className="buttons">
                <button className="linkedIn">Connect with me on LinkedIn!</button>
                <button className="resume-link">Check out my Full Resume!</button>
            </div>
            </div>
            <section className="core-values">
                <h1>Values</h1>
                <div className= "values-container">
                <Values
                value= "value 1"
                description = "describe value"
                />
                <Values
                value= "value 2"
                description = "describe value"
                />
                <Values
                value= "value 3"
                description = "describe value"
                />
                </div>
            </section>
            <section className="personal-touch">
                <h1>Other Sides of Me!</h1>
                <div className="hobbies">
                    <p>photos of things I do</p>
                    <span>descriptor</span>
                    <p>photos of things I do</p>

                </div>
            </section>
        </main>
    )
}
export default About;