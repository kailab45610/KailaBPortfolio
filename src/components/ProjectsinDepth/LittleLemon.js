import ProjectPage from "../Landing/ProjectPage";
import photo from "../../Assets/WIP.png"
function LittleLemon()
{
    return(
        <main>
            <ProjectPage
                title="Little Lemon Restaurant"
                subtitle="Table Reservation Functionality"
                type="A Principles of UI/UX Design Project for Meta’s Front End Developer Certification"
                summary="Little Lemon is a restaurant serving Mediterranean cuisine with a more modern twist on its dishes.
                The current website has its landing page designed, but does not have its other pages designed or developed."
                role="UX Research/UI Designer"
                duration="3 weeks"
                tools="Figma"
                problemtitle="“Hope you’re hungry… for nothing!”"
                problem ="Little Lemon’s owners are ready to set up their website’s online reserve-a-table functionality.
                            The current system has a button labeled “Reserve a Table,” but it doesn’t do anything when clicked on…"
                problemimg={photo}

                outcometitle="“Dinner WILL be served! (Eventually)”"
                outcome="I designed and prototyped a user-friendly and intuitive table-reservation form for Little Lemon’s mobile website.
                        The form uses differing colors, symbols, and feedback to assist users in completing the form with a final confirmation at the conclusion of the process."
                outcomeimg={photo}


            ></ProjectPage>
        </main>
    )
}

export default LittleLemon;
