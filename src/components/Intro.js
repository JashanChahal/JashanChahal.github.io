import { AnimatedText } from "./AnimatedText";
import { SocialMedia } from './SocialMedia';
export const Intro = (props) => {
    return (
        <>
            <SocialMedia style={props.style} />
            <div className="Intro">
                <AnimatedText
                    textColor={props.style.textColor}
                    overlayColor={props.style.overlayColor}>
                    <h1>Hello!</h1>
                    <h1>I'm Jashan Chahal, a Software Engineer</h1>
                    <h1>I love to explore and build exciting things!</h1>
                </AnimatedText>
            </div>
        </>
    )
}