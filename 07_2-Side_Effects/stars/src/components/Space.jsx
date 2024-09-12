import { useState, useEffect } from 'react';
import Star from './Star.jsx';
import styles from './Space.module.css';

let starId = 0;

function Space() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const timerId = setInterval(() => {
            const newStar = {
                id: `${starId}`,
                x: Math.random() * (window.innerWidth - 20),
                y: Math.random() * (window.innerHeight - 20)
            };
            setStars(stars => [...stars, newStar]);
            starId++;
        }, 2500);

        return () => clearInterval(timerId);
    }, []);

    function destroyFunc(id) {
        setStars(stars.filter(star => star.id !== id));
    }

    return (
        <div className={styles.space}>
            {stars.map(star => (
                <Star
                    key={star.id}
                    id={star.id}
                    position={{ x: star.x, y: star.y }}
                    destroyFunc={destroyFunc} />
            ))}
        </div>
    );
}

export default Space;