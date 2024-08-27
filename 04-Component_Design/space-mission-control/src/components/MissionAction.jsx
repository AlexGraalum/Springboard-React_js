import style from "./MissionAction.module.css";

function MissionAction({ missionId, onUpdateMissionStatus }) {
    return (
        <>
            <button id={style.actionButton} onClick={() => onUpdateMissionStatus(missionId, "Active")}>Launch</button>
            <button id={style.actionButton} onClick={() => onUpdateMissionStatus(missionId, "Complete")}>Complete</button>
        </>
    )
}

export default MissionAction;