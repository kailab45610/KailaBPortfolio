function WebInterface(props){
    return(
        <div className="web-interface">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <section className="imgBox">
            <img src={props.interface} alt="web interface"/>
            </section>
            <p className="design-tools">{props.tools}</p>
        </div>
    )
}
export default WebInterface;