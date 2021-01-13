import { useState, useRef } from 'react';
import { css } from '@emotion/css';

export const AnimatedText = ({ textColor, overlayColor, children, ...props }) => {

    const initialMousePos = { x: 0, y: 0 };

    const containerElem = useRef(null);
    const [mousePos, setMousePos] = useState(initialMousePos)

    const handleMouseOut = () => setMousePos(initialMousePos)
    const handleMouseMove = (event) => {
        event = event.nativeEvent;
        const elem = containerElem.current;
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
            className={css`
            position: relative;
            --maskX: 0;
            --maskY: 0;
            ` }
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
                className={css`
                    color: #000000;
                    font-size: 100px;
                    font-weight: 600;
                    line-height: 1.1;
                    letter-spacing: 5px;
                    margin: 0;
                                `}
            >
                {children}
            </div>
            <div
                style={{ color: overlayColor }}
                className={css`
                    font-size: 100px;
                    font-weight: 600;
                    line-height: 1.1;
                    letter-spacing: 5px;
                    margin: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #ffffff;
                  transition: all 0.4s ease-out;
                clip-path: polygon(
                0 0 ,
                calc(var(--maskX) * 1% + (var(--maskY))*0.4% ) 0,
                calc(var(--maskX) * 1% + (var(--maskY)) * -0.4%) 100%,
                0 100%
                ) ;
                `}
            >
                {children}
            </div>
        </section>
    );
}


