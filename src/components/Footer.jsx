import twitterlogo from "../images/Twitter Icon.png"
import instalogo from "../images/Instagram Icon.png"
import githublogo from "../images/GitHub Icon.png"
import facebooklogo from "../images/Facebook Icon.png"


export default function Footer() {
    return(
        <div className="footer--container">
                <div className="footer--items">
                    
                    <a href="https://twitter.com/Vijay81307" target="_blank">
                        <img 
                            src={twitterlogo} 
                            alt="#" 
                            className="footer--image" 
                        />
                    </a>
                    <a href="https://www.instagram.com/vijay67chaudhary/" target="_blank">
                        <img 
                            src={instalogo} 
                            alt="#" 
                            className="footer--image" 
                        />
                    </a> 
                    <a href="https://github.com/Vijay8130" target="_blank">
                        <img 
                            src={githublogo} 
                            alt="#" 
                            className="footer--image" 
                        />
                    </a>    
                    <a href="https://www.facebook.com/vjverma01/" target="_blank">
                        <img 
                            src={facebooklogo} 
                            alt="#" 
                            className="footer--image" 
                        />
                    </a>    
            </div>
        </div>
    )
}