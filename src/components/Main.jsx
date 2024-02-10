import emaillogo from "../images/Mail.png"
import linkedinlogo from "../images/linkedin.png"
export default function Main() {
    return(
        <div className="main--container">
            <h3 className="main--heading main--content">
                Vijay Verma
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link (coming soon)
            </span>
            <div className="btn--class">
            <a href="mailto:vjverma67@gmail.com" target="_blank">
                <button className="main--btn btn--email">
                    <img src={emaillogo} className="email" />Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/vijay-verma-84a84562/" target="_blank">
                <button className="main--btn btn--linkedin">
                   <img src={linkedinlogo} className="linkedin"/>LinkedIn
                </button>
            </a>
            </div>
            <div className="main--about--interest">
                <h3>About</h3>
                <p>I am a frontend developer. I approach development with a continuous learning mindset. Eager to explore new horizons in the ever-evolving world of frontend technologies, I bring a unique blend of simplicity, automation, and a relentless pursuit of knowledge to every project. 
                </p>

                <h3>Interest</h3>
                <p>Passionate traveler. Swimming. Football. Video Games. Learning. Culinary Adventures. </p>

            </div>
        </div>
    )
    
}