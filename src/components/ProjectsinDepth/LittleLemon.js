import ProjectPage from "../Landing/ProjectPage";
import photo from "../../Assets/WIP.png"
function LittleLemon()
{
    return(
        <main>
            <ProjectPage
                title="Little Lemon Restaurant Reservation System"
                description="Designing a table reservation system for Little Lemon Restaurant's mobile application."
                problem ="Customers have become increasingly frustrated with Little Lemon's lack of an online reservation system."
                problemimg={photo}
                outcome="I have designed a straight-forward table reservation system for the mobile interface."
                outcomeimg={photo}
            ></ProjectPage>
        </main>
    )
}

export default LittleLemon;
