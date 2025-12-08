function MobileInterface(props){
    return(
        <div className="mobile-interface">
            <h3>{props.title}</h3>
            <img src={props.interface} alt="mobile interface"/>
            <p>{props.description}</p>
            <p className="design-tools">{props.tools}</p>
        </div>
    )
}
export default MobileInterface;