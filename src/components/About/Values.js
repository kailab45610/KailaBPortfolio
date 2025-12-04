function Values(props){
    return(
        <div className="value-box">
        <h1>{props.value}</h1>
        <p>{props.description}</p>
        </div>
    );
}
export default Values;