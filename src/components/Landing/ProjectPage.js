
function ProjectPage(props){
    return(
        <main className = "project">
            <section className="title" style={{textAlign:"center"}}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </section>
            <section className="problem-outcome-section">
            <div className="problem">
                <h1>Problem</h1>
                <p>{props.problem}</p>
                <img src = {props.problemimg}/>
            </div>
            <div className="outcome">
                <h1>Outcome</h1>
                <p>{props.outcome}</p>
                <img src = {props.outcomeimg}/>
            </div>
            </section>

            <div className="title">
                <h1>Research Section</h1>

            </div>
            <div className="title">
                <h1>Wireframes Section</h1>

            </div>

            <div className="title">
                <h1>Outcomes</h1>

            </div>
        </main>
    )
}

export default ProjectPage;