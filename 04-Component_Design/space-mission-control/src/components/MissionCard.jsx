import style from "./MissionCard.module.css";

function MissionCard({ name, status, crew }) {
    return (
        <>
            <h2 id={style.missionName}>{name}</h2>
            <p id={style.missionInfo}>Status: {status}</p>
            <p id={style.missionInfo}>Crew: {crew.join(", ")}</p>
        </>
    );
}

export default MissionCard;