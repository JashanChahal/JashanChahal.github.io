import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from "react";
import './socialMedia.css';
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
            <TransitionGroup component={null}>
                {more && icons.map((icon, idx) => (
                    <CSSTransition key={idx} in={more} timeout={350} classNames="icon">
                        <FontAwesomeIcon
                            className={props.style.bootstrapMargin}
                            color={props.style.textColor}
                            size="2x"
                            icon={icon} />
                    </CSSTransition>
                ))
                }
            </TransitionGroup>

        </>
    )
}