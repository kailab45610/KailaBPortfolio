import { Link } from "react-router-dom";
function CaseStudy(props){
    return(
        <Link to = {props.page}>
        <button className="proj-thumbnail">
            <a href={props.link}></a>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.image} alt={props.title}/>
        </button>
        </Link>
    )
}
export default CaseStudy;