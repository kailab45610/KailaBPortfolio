import me from "../../Assets/ME.jpeg"
import Values from './Values';
function About() {
    return(
        <main>
            <div className="about-header">
                <section className="about-descrip">
                    <div className="about-text">
                        <h1>Hi! I'm Kaila (Kay-la)</h1>
                        <p><br/>
                            I’m a recently graduated Software Engineering student with a focus on UI/UX design and front-end web development. From my experiences in software development processes, I have truly fallen in love with putting the "fun" in functionality. 
                            <br/><br/>
                            While I'm always looking for opportunities to learn more about myself, I recognize that creativity and empathy have been a constant foundation in everything I make. Being able to have these values applied to computing is what truly pushed my confidence in development. 
                            Further exploration allowed me to grow a heavier interest in front-end development, driving me to grow adept in front-end coding languages such as JavaScript, HTML, and CSS along with a strong proficiency in tools and frameworks Figma and React.
                                 <br/>
                                </p>
                   
                    </div>
                <img src={me} style={{justifySelf:"start"}}/>
                </section>

                <div className="buttons">
                    <a href="https://www.linkedin.com/in/kaila-bryant-36a510239/" target="_blank">
                    <button className="linkedIn">Connect with me on LinkedIn!</button>
                    </a>

                <a href="/Kaila%20Bryant%20Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume-link">Check out my Full Resume!</button>
                </a>
                </div>
            </div>
             <section className="core-values">
                <h1 className='title' style={{display:"grid",marginTop:"0", paddingTop:"2vh", paddingBottom:"2vh"}}>Skills</h1>

                </section>
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
             {/*  <h1 className='title'>Other Sides of Me!</h1>
                <div className="hobbies">
                    <p>photos of things I do</p>
                    <span>descriptor</span>
                    <p>photos of things I do</p>

                </div>*/}
        </main>
    )
}
export default About;