import photo from "../Assets/WIP.png"
import MobileInterface from "../components/Visual/MobileInterface";
import WebInterface from "../components/Visual/WebInterface";
import ezmng from "../components/Visual/Assets/EzMng Prototype.gif"
import handi from "../components/Visual/Assets/HandiBot.png"
import starbit from "../components/Visual/Assets/starbit cafe.png"
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
                    title="EzMng"
                    interface={ezmng}
                    description="A Project Management organization tool"
                    tools="Figma"
                    />
                    <WebInterface
                    title="HandiBot"
                    interface={handi}
                    description="An e-commerce website for commercial and personal assisting robots"
                    tools="Figma"
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