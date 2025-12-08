function WebInterface(props){
    return(
        <div className="web-interface">
            <h3>{props.title}</h3>
            <img src={props.interface} alt="web interface"/>
            <p>{props.description}</p>
            <p className="design-tools">{props.tools}</p>
        </div>
    )
}
export default WebInterface;