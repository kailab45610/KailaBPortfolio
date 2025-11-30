import photo from '../blade.png'
function About() {
    return(
        <main>
            <div className="about-header">
                <img src={photo}/>
                <div className="about-title">
                    <h1>About Me</h1>
                    <p>Description</p>
                </div>
            </div>
        </main>
    )
}
export default About;