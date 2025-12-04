import photo from "../../Assets/WIP.png"
import Values from './Values';
function About() {
    return(
        <main>
            <div className="about-header">
                    <h1>About Me</h1>
                    <p>Description</p>
                <img src={photo}/>
                <div className="buttons">
                <button className="linkedIn">Connect with me on LinkedIn!</button>
                <button className="resume-link">Check out my Full Resume!</button>
            </div>
            </div>
            <section className="core-values">
                <h1 className='title' style={{display:"grid",marginTop:"0", paddingTop:"2vh", paddingBottom:"2vh"}}>Values</h1>
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
                <h1 className='title'>Other Sides of Me!</h1>
                <div className="hobbies">
                    <p>photos of things I do</p>
                    <span>descriptor</span>
                    <p>photos of things I do</p>

                </div>
        </main>
    )
}
export default About;