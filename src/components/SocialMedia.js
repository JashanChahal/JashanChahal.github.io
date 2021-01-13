import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";

export const SocialMedia = (props) => {
    const icons = [faGithub, faLinkedin, faInstagram, faFacebook];

    const [more, setMore] = useState(false);

    let chevronCirle = more ? faChevronCircleDown : faChevronCircleRight;

    return (
        <>
            <FontAwesomeIcon
                className={props.style.bootstrapMargin}
                color={props.style.textColor}
                size="2x"
                icon={chevronCirle}
                onClick={() => (setMore(!more))}
            />
            {more && icons.map((icon, idx) => (
                <FontAwesomeIcon
                    className={props.style.bootstrapMargin}
                    color={props.style.textColor}
                    size="2x"
                    icon={icon} />
            ))
            }

        </>
    )
}