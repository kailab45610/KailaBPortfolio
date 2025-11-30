function CaseStudy(props){
    return(
        <div className="proj-thumbnail">
            <a href={props.link}></a>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default CaseStudy;