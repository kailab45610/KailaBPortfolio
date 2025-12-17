import ProjectPage from "../../../pages/ProjectPage";
import logo1 from "./Assets/Logo1.png"
import logos from "./Assets/logos.png"
import wireframe from "./Assets/wireframe.png"
import outcome from "./Assets/outcome.png"
import problem from "./Assets/layoutTemplate.png"

import "./style.css"

function HairDay()
{
    const goals=(
        <ul className="goalsList">
            <li>The website should show the user <b>3</b> featured services.</li>
            <li>Users should be shown the <b>current promotion</b> in a <b>hero section</b> of the landing page.</li>
            <li>The overall UI of the webpage should be <b>consistent</b> with the brand's established colors.</li>
        </ul>
    )

    const reflection = (
        <ul>
            <h3>Brand Identification</h3>
            <li>I was able to explore consistency with branding and designing a business-oriented webpage.</li>
            <h3>Interaction makes Memories</h3>
            <br/><li>I added quite a few hover effects to allow the user to feel more immersed in using the website. I believe interactive feedback gives the user a sense of completion and satisfaction that the page works the way they want it to.</li>
            <h3>Try to Stray from the Beaten Path (Sometimes)</h3>
            <li>The provided template does not include a navigation component to a 'Blog,' which is something Pria desired to have in her website.</li>
        </ul>
    )

    const next = (
        <ul>
            <h3>Variation Should Not Be Scary!<br/></h3>
            <li>In my next iteration, I think I'd branch out from the current color scheme to find an accent color that would suit the buttons and hover effects, creating an even better consistnecy in UI.</li>
            <h3>Full Fleshed Development: Incoming</h3>
            <li>The next steps would be developing all the other pages within the website. I would keep consistency, responsiveness, and inspiration in mind as I completed the services, booking, and about page.</li>
            <h3>Stories and Inspiration for Everyone</h3>
            <li>Looping back to the requirements and desires, the stylists at HairDay enjoy posting blogs and tutorials for their clients - to enable this, I would implement a 'Blog' section in the navigation bar in the header.</li>
        </ul>
    )
    const ideation = (
        <ul className="ideationList">
            <li><b>Header:</b> Includes Logo + Navigation</li>
            <li><b>Hero Section:</b> Displays a promotion that the salon is currently running</li>
            <li><b>Services List:</b> Features 3 most popular hair services that the salon is known for</li>
            <li><b>Footer:</b> Includes Logo + Copyright</li>
        </ul>
    )

    return(
        <main className="hairday">
            <ProjectPage
                title="HairDay"
                subtitle="Website Landing Page"
                type="An HTML/CSS Project for Meta's Front End Developer Certification"
                headerimg = {logo1}

                summary="HairDay is a fictional salon that provides several different types of hair styling, makeup, and nail services. The business currently does not have a website, but needs a way for clients to book their appointments and access tutorials and blogs posted by the staff at HairDay."
                role="UI Designer, UI Developer"
                duration="2 Weeks"
                tools="VS Code | HTML + CSS, Figma"

                problemtitle="Inspiration through Visuals"
                problem="Pria, the owner of HairDay salon, requires a website that allows her clients to view available services and book appointments far in advance. She already holds a reputation for the salon's 'warm and relaxing' atmosphere and would like for the website to reflect the current aesthetics she has for her business. The salon's landing page should have a display for her featured services, a promotional banner, and an easy way for users to navigate between pages."
                problemimg={problem}

                outcometitle="Let's get Styling!"
                outcome ="I designed a responsive webpage that shows the current promotion, the services of the salon, and navigation at the top of the page. This webpage stays consistent with the salon's main colors and makes use of their different logos at the header and footer of the page."
                outcomeimg={outcome}

                goals={goals}

                ideationdescrip="I was provided with a layout template and requirements that allowed me to easily plan the components that would be on the landing page:"
                ideation={ideation}

                styleDescrip="I was not provided with a fully detailed style guide from the client - instead I was given variations of the salon's logo. This allowed me to have a bit of freedom in font styling while getting a feel for the color choice of the brand's identity."
                styleGuide= {logos}

                wireframetype="Low Fidelity, Figma Jamboard"
                wireframes={wireframe}

                prototitle="Final Design"
                prototype={outcome}

                reflection={reflection}

                next ={next}
            ></ProjectPage>
        </main>
    )
}

export default HairDay;