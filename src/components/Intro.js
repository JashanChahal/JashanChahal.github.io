import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatedText } from "./AnimatedText";
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export const Intro = () => {
    return (
        <div>
            <FontAwesomeIcon className="m-2" color="#b34b29" size="2x" icon={faChevronCircleDown} />
            <FontAwesomeIcon className="m-2" color="#b34b29" size="2x" icon={faGithub} />
            <FontAwesomeIcon className="m-2" color="#b34b29" size="2x" icon={faLinkedin} />
            <FontAwesomeIcon className="m-2" color="#b34b29" size="2x" icon={faInstagram} />
            <FontAwesomeIcon className="m-2" color="#b34b29" size="2x" icon={faFacebook} />

            <div className="Intro">
                <AnimatedText textColor="#b34b29" overlayColor="#ebcac0">
                    <h1>Hello!</h1>
                    <h1>I'm Jashan Chahal, a Software Engineer</h1>
                    <h1>I love to explore and build exciting things!</h1>
                </AnimatedText>
            </div>
        </div>
    )
}