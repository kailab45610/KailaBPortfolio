import { Link } from "react-router-dom";

function ProjectPage(props){
    return(
        <main className = "project">
            <section className="project-header">
                <div className="title">
                <h1> {props.title}</h1>
                <h3>{props.subtitle}</h3>
                <p>Type: {props.type}</p>
                </div>
                <img src={props.headerimg} alt="The project's logo"/>
            </section>

            <div>
            <section className="project-section">
                <h1 className="title">Summary</h1>
                <p>{props.summary}</p>
            </section>

            <div className="tri-col">
            <section className="project-section">
                <h2 className="title">Role</h2>
                <p>{props.role}</p>
            </section>
            <section className="project-section">
                <h2 className="title">Duration</h2>
                <p>{props.duration}</p>
            </section>
            <section className="project-section">
                <h2 className="title">Tools</h2>
                <p>{props.tools}</p>
            </section>
            </div>
            </div>

            <section className="problem-outcome-section">
            <div className="problem">
                <h1 className="title">Problem</h1>
                <h2>{props.problemtitle}</h2>
                <div className="duo-col">
                <p>{props.problem}</p>
                <img src = {props.problemimg} alt="Portrays what I started With"/>
                </div>
            </div>
            <div className="outcome">
                <h1 className="title">Outcome</h1>
                <h2>{props.outcometitle}</h2>
                 <div className="duo-col">
                <p>{props.outcome}</p>
                <img src = {props.outcomeimg} alt="Portrays the final product"/>
                </div>
            </div>
            </section>

            <div className="project-section">
                <h1 className="title">Goals</h1>

                <div className="duo-col" style={{gridTemplateColumns:"0.5fr 1.5fr", justifyItems:"center"}}>
                <img src= "/goal.png" style={{width:"150px", justifySelf:"end"}} alt="A goal Flag"/>
                <div>{props.goals}</div>
                </div>

            </div>
            <div className="project-section">
                <h1 className="title">Design Process</h1>
                <section >
                    <h2 className="title" style={{backgroundColor:"transparent", color:"white", border:"none"}}>Ideation</h2>
                    <div className="duo-rows">
                        <p style={{alignSelf:"center",paddingLeft:"8vh", paddingRight:"8vh", fontSize: "22px", textAlign:"center"}}>{props.ideationdescrip}</p>
                            <div>{props.ideation}</div>
                    </div>
                </section>
                {/* <section >
                    <h2 className="title" style={{backgroundColor:"transparent", color:"white", border:"none"}}>Persona/Journey Map</h2>
                    <div className="duo-col">
                        <p style={{alignSelf:"center",paddingLeft:"8vh", paddingRight:"8vh", fontSize: "22px"}}>{props.personaDescrip}</p>
                            <div>{props.persona}</div>
                    </div>
                    <div className="duo-col">
                        <p style={{alignSelf:"center",paddingLeft:"8vh", paddingRight:"8vh", fontSize: "22px"}}>{props.journeyMapDescrip}</p>
                            <div>{props.map}</div>
                    </div>
                </section>*/}
                <section className="styleGuide">
                    <h2 className="title" style={{backgroundColor:"transparent", color:"white", border:"none"}}>Style Guide</h2>
                        <p>{props.styleDescrip}</p>
                        <div className="styleBox" >
                        <img src={props.styleGuide} alt="This project's style guide"/>
                    </div>
                </section>
            </div>

            <div className="project-section">
                <h2 className="title">Wireframe</h2>
                <div className="duo-rows">
                    <h3>{props.wireframetype}</h3>
                <img src = {props.wireframes} style={{borderRadius:"5px", width:"90%"}} alt="This project's wireframe(s)"/>
                </div>
            </div>

            <div className="project-section">
                <h2 className="title">Prototype</h2>
                <div className="duo-rows">
                    <h3>{props.prototitle}</h3>
                <img className="prototypeImg" src = {props.prototype} alt="This project's prototype(s)"/>
                </div>
            </div>
            <section className="duo-col">
                <div>
                <h2 className="title">Reflect</h2>
                    {props.reflection}
                </div>

                <div>
                <h2 className="title">Next Steps</h2>
                    {props.next}
                </div>
            </section>

                <h2 className="title">Thanks for Reading!</h2>
                    <Link to="/">
                        <button className="project-Works"><h2>Go To Works</h2></button>
                    </Link>
        </main>
    )
}

export default ProjectPage;