import linkedin from '../Assets/linkedin.png'
import mail from '../Assets/mail.png'
import { useState } from 'react';
function Contact() {

    const[name, setName]=useState('');
    const[email,setEmail]=useState('')
    const[message,setMessage]=useState('');

    return(
        <main>
           {/* <div>
                <div className="title">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <form>
                <label for ="name">Name: </label>
                <input
                id="name"
                name="name"
                type="text"
                placeholder='Enter Full Name'
                value={name}
                onChange={e=> setName(e.target.value)}
                required></input>

                <label for= "email">Email: </label>
                <input
                type="email"
                placeholder='Enter Email'
                value={email}
                onChange={e=> setEmail(e.target.value)}
                required></input>

                <label for="message">Your Message:</label>
                <textarea
                id="message"
                name="message"
                rows="5"
                cols="50"
                placeholder="Enter your Message"
                value={message}
                onChange={e=> setMessage(e.target.value)}
                required
                style={{resize:'none'}}>
                </textarea>

                <button type="submit" value="Submit">Submit</button>
            </form> */}

            <div className="socials" >
                <div className="title" style={{margin:"8vh"}}>
                    <h1>Connect with Me</h1>
                    <h3>I'd love to hear from you!</h3>
                </div>
                <section className="social-links">
                <button className="linkedIn">
                    <img src={linkedin}/>
                </button>

                <button className="email">
                    <img src={mail}/>
                </button>
                </section>
            </div>

        </main>
    )
}
export default Contact;