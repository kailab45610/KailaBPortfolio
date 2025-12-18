import me from "../Assets/ME.jpeg"
import Values from '../components/About/Values';
import {Css, FigmaDark, ReactDark, Git, JavaScript, NodeJsDark, Html} from '@skill-icons/react';
function About() {
    return(
        <main>
            <div className="about-header">
                        <div className="title">
                            <h1>Hi! I'm Kaila (Kay-la)</h1>

                            </div>

                        <p className="bio"><br/>
                            I’m a recently graduated <b>Software Engineering student</b> with a focus on <b>UI/UX design and front-end web development</b>. From my experiences in software development processes, I have truly fallen in love with putting the "fun" in functionality.
                            <br/><br/>
                            While I'm always looking for opportunities to learn more about myself, I recognize that <b>creativity</b> and <b>empathy</b> have been a constant foundation in everything I make. Being able to have these values applied to computing is what truly pushed my confidence in development. 
                            Further exploration allowed me to grow a heavier interest in front-end development, driving me to grow adept in front-end coding languages such as <b>JavaScript, HTML, and CSS</b> along with a strong proficiency in tools and frameworks <b>Figma</b> and <b>React</b>.
                                 <br/>
                                </p>
                            <img className="me" src={me} style={{justifySelf:"start"}}/>

                <div className="buttons">
                    <a href="https://www.linkedin.com/in/kaila-bryant-36a510239/" target="_blank">
                    <button className="linkedIn">Connect with me on LinkedIn!</button>
                    </a>

                <a href="/Kaila%20Bryant%20Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume-link">Check out my Full Resume!</button>
                </a>
                </div>
            </div>


             <section className="skill-container">
                <h1 className='title' style={{display:"grid",marginTop:"0", paddingTop:"2vh", paddingBottom:"2vh"}}>Skills</h1>
                <div className="skills-box">

                    <div className="skills-container">
                        <div className="skill">
                            <h3>CSS</h3>
                                <Css className="icon"/>
                        </div>
                        <div className="skill">
                            <h3>HTML5</h3>
                                <Html className="icon"/>
                        </div>
                        <div className="skill">
                            <h3>JavaScript</h3>
                                <JavaScript className="icon"/>
                        </div>
                        <div className="skill">
                            <h3>Git</h3>
                                <Git className="icon"/>
                        </div>
                        <div className="skill">
                            <h3>React</h3>
                                <ReactDark className="icon"/>
                        </div>
                        <div className="skill">
                            <h3>Figma</h3>
                                <FigmaDark className="icon"/>
                        </div>

                    </div>

                    <div className="skills-list">
                        <h3>Concepts:</h3>
                        <ul>
                            <div>
                            <li>UI/UX Design</li>
                            <li>Prototypes/Wireframes</li>
                            <li>User-Centered Design</li>
                            <li>Web Design</li>
                            <li>UX Research</li>

                            </div>
                            <div>
                            <li>Front End Web Development</li>
                            <li>Software Development Life Cycle</li>
                            <li>Agile, Kanban, Iterative Methodologies</li>
                            </div>
                        </ul>
                    </div>
                    </div>

                </section>
            <section className="core-values">
                <h1 className='title' style={{display:"grid",marginTop:"0", paddingTop:"2vh", paddingBottom:"2vh"}}>Core Values</h1>
                <div className= "values-container">
                <Values
                value= "Empathy"
                description = "Whether I can relate or not, I always take the time to try to understand others. This empathetic trait of mine allows me to pour compassion and user-centered practices into my work."
                />
                <Values
                value= "Creativity"
                description = "Creativity has no boundaries - it can be used in visual arts and in engineering alike. Having this belief, I always try to spark inspiration in myself and others to create beautiful products with a fun and creative building process when possible."
                />
                <Values
                value= "Adaptability"
                description = "Life is full of change, so I find it best to just go with the flow and figure out how to work with what's given to me - or how to get what I need! I acknowledge my own ambition, and I always make sure I keep it ready and available when I need to keep my eye on a goal."
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