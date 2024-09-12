import { useEffect, useRef } from 'react';
import styles from "./Star.module.css";

//const STAR_IMAGE = "https://static.vecteezy.com/system/resources/previews/023/258/446/original/a-star-with-transparent-background-sticker-illustration-free-png.png";

function Star({ id, position, destroyFunc }) {
    const starRef = useRef(null);

    useEffect(() => {
        const star = starRef.current;
        star.focus();
    }, []);

    function handleClick(event) {
        destroyFunc(id);
    }

    return (
        <div ref={starRef}
            tabIndex="0"
            onClick={handleClick}
            style={{ left: position.x, top: position.y }}
            className={styles.star}
        >&#9733;</div>
    );
}

export default Star;

//import { useEffect, useRef } from "react";
//
//import styles from "./Star.module.css";
//
//function Star({ id, position, destroyStar }) {
//    const starRef = useRef(null);
//
//    useEffect(() => {
//        const star = starRef.current;
//        star.focus();
//    }, []);
//
//    function handleClick(event) {
//        destroyStar(id);
//    }
//
//    return (
//        <div
//            ref={starRef}
//            tabIndex="0"
//            onClick={handleClick}
//            style={{ left: position.x, top: position.y }}
//            className={styles.star}
//        >Star</div>
//    );
//}
//
//export default Star;
