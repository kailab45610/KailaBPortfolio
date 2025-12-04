import { Link } from "react-router-dom";
function CaseStudy(props){
    return(
        <Link to = {props.page}>
        <button className="proj-thumbnail">
            <a href={props.link}></a>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </button>
        </Link>
    )
}
export default CaseStudy;