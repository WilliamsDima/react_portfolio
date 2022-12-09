import cn from 'classnames'
import React, { useRef, useEffect } from 'react'
import styles from './style.module.scss'

const StarsMove = ({speed = 2, start = false}) => {

    const stars = useRef()

    let boostSpeed = speed
    let boostCount = 300

    const createStars = () => {
        const starsCtx = stars.current.getContext('2d');

        // global variables
        let screen, starsElements, starsParams = { speed, number: 300, extinction: 4 };
    
        // run stars
        setupStars();
        updateStars();
    
        // update stars on resize to keep them centered
        window.onresize = function() {
            setupStars();
        };
    
        // star constructor
        function Star() {
            this.x = Math.random() * stars?.current?.width;
            this.y = Math.random() * stars?.current?.height;
            this.z = Math.random() * stars?.current?.width;
    
            this.move = function() {
                this.z -= boostSpeed;

                if (start) {
                    boostSpeed += 0.0001
                    boostCount += 1
                }
                if (this.z <= 0) {
                    this.z = stars?.current?.width;
                }
            };
    
            this.show = function() {
                let x, y, rad, opacity;
                x = (this.x - screen.c[0]) * (stars?.current?.width / this.z);
                x = x + screen.c[0];
                y = (this.y - screen.c[1]) * (stars?.current?.width / this.z);
                y = y + screen.c[1];
                rad = stars?.current?.width / this.z;
                opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;
    
                if (starsCtx) {
                    starsCtx.beginPath();
                    starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                    starsCtx.arc(x, y, rad, 0, Math.PI * 2);
                    starsCtx.fill();
                }
            }
        }
    
        // setup <canvas>, create all the starts
        function setupStars() {
            screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
            };
            window.cancelAnimationFrame(+updateStars);

            if (stars.current) {
                stars.current.width = screen.w;
                stars.current.height = screen.h;
            }

            starsElements = [];
    
            for (let i = 0; i < boostCount; i++) {
                starsElements[i] = new Star();
            }
        }
    
        // redraw the frame
        function updateStars() {
            if (starsCtx) {
                starsCtx.fillStyle = "black";
                starsCtx.fillRect(0, 0, stars?.current?.width, stars?.current?.height);
            }
    
            starsElements.forEach(function (s) {
                s.show();
                s.move();
            });
    
            window.requestAnimationFrame(updateStars);
        }
    }

    useEffect(() => {

        createStars()
    }, [])

    return (

        <div className={cn({
            [styles.start]: start
        })}>
            <canvas ref={stars} className={styles.stars}></canvas>
        </div>
            
    )
}

export default StarsMove