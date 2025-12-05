
function ProjectPage(props){
    return(
        <main className = "project">
            <section className="title" style={{textAlign:"center"}}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <p>Type: {props.type}</p>
            </section>

            <section className="title">
                <h1>Summary</h1>
                <p>{props.summary}</p>
            </section>

            <div className="tri-col">
            <section className="title">
                <h2>Role</h2>
                <p>{props.role}</p>
            </section>
            <section className="title">
                <h2>Duration</h2>
                <p>{props.duration}</p>
            </section>
            <section className="title">
                <h2>Tools</h2>
                <p>{props.tools}</p>
            </section>
            </div>

            <section className="problem-outcome-section">
            <div className="problem">
                <h1>Problem</h1>
                <h2>{props.problemtitle}</h2>
                <p>{props.problem}</p>
                <img src = {props.problemimg}/>
            </div>
            <div className="outcome">
                <h1>Outcome</h1>
                <h1>{props.outcometitle}</h1>
                <p>{props.outcome}</p>
                <img src = {props.outcomeimg}/>
            </div>
            </section>

            <div className="title">
                <h1>Goals</h1>
                <ul>
                    <li>{props.goals}</li>
                </ul>

            </div>
            <div className="title">
                <h1>Design Process</h1>

            </div>
            <div className="title">
                <h2>Wireframes Section</h2>

            </div>

            <div className="title">
                <h2>Prototype Section</h2>

            </div>

            <section className="duo-col">
                <div className="title">
                <h2>Reflect</h2>
                    <ul>
                        <li>{props.reflection}</li>
                    </ul>
                </div>

                <div className="title">
                <h2>Next Steps</h2>
                </div>
            </section>
        </main>
    )
}

export default ProjectPage;