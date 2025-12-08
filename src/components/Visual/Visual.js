import photo from "../../Assets/WIP.png"
import MobileInterface from "./MobileInterface";
function Visual() {
    return(
        <main className="visual">
            <section className="title" style={{textAlign:"center"}}>
                <h1>My Designs</h1>
                <p>My mobile, web, and other designs will be displayed on this page!</p>
            </section>
            <div className="designs-container">
                <MobileInterface
                    title="Title"
                    interface={photo}
                    description="description"
                    tools="tools"
                    />
                    <MobileInterface
                    title="Title"
                    interface={photo}
                    description="description"
                    tools="tools"
                    />
                    <MobileInterface
                    title="Title"
                    interface={photo}
                    description="description"
                    tools="tools"
                    />
            </div>
        </main>
    )
}
export default Visual;