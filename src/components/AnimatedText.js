import { useState, useRef } from 'react';
import './animatedText.css'
export const AnimatedText = ({ textColor, overlayColor, children, ...props }) => {
    const initialMousePos = { x: 0, y: 0 };
    const containerElem = useRef(null);
    const [mousePos, setMousePos] = useState(initialMousePos)

    const handleMouseOut = () => setMousePos(initialMousePos)
    const handleMouseMove = (event) => {
        event = event.nativeEvent;
        const elem = containerElem.current;
        console.log(elem);
        const newX = (event.offsetX / elem.clientWidth) * 100;
        const newY = (event.offsetY / elem.clientHeight) * 100;
        const newMousePos = {
            x: newX,
            y: newY
        };
        setMousePos(newMousePos);
    };

    return (

        <section
            className="animatedTextContainer"
            {...props}
            style={{
                "--maskX": mousePos.x,
                "--maskY": mousePos.y
            }
            }
            ref={containerElem}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        >
            <div
                style={{ color: textColor }}
                className="animatedTextContent"
            >
                {children}
            </div>
            <div
                style={{ color: overlayColor }}
                className="animatedTextContentClone"
            >
                {children}
            </div>

        </section>
    );
}