import ProjectPage from "../Landing/ProjectPage";
import photo from "../../Assets/WIP.png"
import lemonlogo from "./Assets/lemonlogo.jpg"
import "./lemon.css"
import wireframes from "./Assets/wireframe.png"
import final from "./Assets/Lemon.png"
import problem from "./Assets/lemonProblem.png"
import outcome from "./Assets/lemonprototype.gif"
import style from "./Assets/lemonStyleGuide.jpg"
function LittleLemon()
{
    const goals=(
        <ul className="goalsList">
            <li>The form should be <b>straightforward</b> and quick to fill out.</li>
            <li>Users should <b>not</b> feel like they’re on a different application when on the booking screens.</li>
            <li>Users should be able to tell which information is <b>required</b> with proper <b>symbols</b> and <b>feedback</b>.</li>
        </ul>
    )

    const reflection = (
        <ul>
            <h3>Creating a Form is more than just Fields and a Label on a Screen -
                it’s a way for the Users to Communicate with the Business.</h3>
            <li>Speed is important, but ensuring that the users know <b>exactly</b> what to fill out will ensure <b>accurate</b> and <b>correct</b> information on both ends.</li>
            <h3>The Journey + The Destination are Both Pretty Cool</h3>
            <li>I learned a lot from the user research I was able to do, and I believe that the user-centric design approach sped the design process up <b>by at least 15%</b>.</li>
        </ul>
    )

    const next = (
        <ul>
            <h3>Websites for The Family<br/><br/></h3>
            <li>Ensure that the design is developed with a <b>responsive approach</b>, allowing users to access the website on varying screen types.</li>
            <h3>Show and Tell the steps</h3>
            <li>I overlooked the opportunity to add a <b>progress indicator</b> for the form due to my heavy focus on speed and ease of use. In the final development,
                 I would implement a <b>progress bar</b> or <b>number the pages</b> required for the table reservation form to increase <b>responsive feedback</b>.</li>
        </ul>
    )
    const ideation = (
        <ul className="ideationList">
            <div>
            <li>Name</li>
            <li>Email</li>
            <li>Phone Number</li>
            <li>Date</li>
            </div>
            <div>
            <li>Time</li>
            <li>Table Type</li>
            <li>Number of Guests</li>
            <li>Special Occasion</li>
            </div>
        </ul>
    )
    return(
        <main className="lemon" style={{backgroundColor: "#495E57"}}>
            <ProjectPage
                title="Little Lemon Restaurant"
                subtitle="Table Reservation Functionality"
                type="A Principles of UI/UX Design Project for Meta’s Front End Developer Certification"
                headerimg= {lemonlogo}
                summary="Little Lemon is a restaurant serving Mediterranean cuisine with a more modern twist on its dishes.
                The current website has its landing page designed, but does not have its other pages designed or developed."
                role="UX Research/UI Designer"
                duration="3 weeks"
                tools="Figma"
                problemtitle="“Hope you’re hungry… for nothing!”"
                problem ="Little Lemon’s owners are ready to set up their website’s online reserve-a-table functionality.
                            The current system has a button labeled “Reserve a Table,” but it doesn’t do anything when clicked on…"
                problemimg={problem}

                outcometitle="“Dinner WILL be served! (Eventually)”"
                outcome="I designed and prototyped a user-friendly and intuitive table-reservation form for Little Lemon’s mobile website.
                        The form uses differing colors, symbols, and feedback to assist users in completing the form with a final confirmation at the conclusion of the process."
                outcomeimg={outcome}

                goals= {goals}

                ideationdescrip="The major requirements to consider for this project were the fields needed in the form. These would include the reservation information and the user’s information to ensure the restaurant would have no questions about reservations they receive. "
                ideation = {ideation}

                styleDescrip="The following style guide was used as a reference throughout the design process to ensure a clean and consistent application that maintained the brand identity of Little Lemon. "
                styleGuide={style}


                wireframetype="Medium Fidelity"
                wireframes={wireframes}

                prototitle="Prototype Screens"
                prototype={final}


                reflection = {reflection}

                next = {next}


            ></ProjectPage>
        </main>
    )
}

export default LittleLemon;
