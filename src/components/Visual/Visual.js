import photo from "../../Assets/WIP.png"
import MobileInterface from "./MobileInterface";
import WebInterface from "./WebInterface";
import ezmng from "./Assets/EzMng Prototype.gif"
import handi from "./Assets/HandiBot.png"
import starbit from "./Assets/starbit cafe.png"
function Visual() {
    return(
        <main className="visual">
            <section className="title" style={{textAlign:"center"}}>
                <h1>My Designs</h1>
                <p>My mobile, web, and other designs will be displayed on this page!</p>
            </section>
            <h2 className="title" style={{backgroundColor:"transparent", border:"none", marginBottom: "2px"}}>Web Interfaces</h2>
            <div className="designs-container">
                <WebInterface
                    title="Title"
                    interface={ezmng}
                    description="description"
                    tools="tools"
                    />
                    <WebInterface
                    title="Title"
                    interface={handi}
                    description="description"
                    tools="tools"
                    />
            </div>
            <h2 className="title" style={{backgroundColor:"transparent", border:"none", marginBottom: "2px"}}>More On the Way!</h2>
            <div style={{paddingBottom:"15vh"}}>
                <img src={photo} style={{display:"grid",justifySelf:"center"}}/>
            </div>
        </main>
    )
}
export default Visual;