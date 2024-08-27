import { useState } from "react";

import MissionFilter from "./MissionFilter.jsx";
import MissionCard from "./MissionCard.jsx"
import MissionAction from "./MissionAction.jsx";

import style from "./MissionControl.module.css";

function MissionControl({ initialMissions }) {
    const initialFilter = "All";

    const [missions, setMissions] = useState(initialMissions);
    const [filter, setFilter] = useState(initialFilter);

    function updateMissionStatus(id, newStatus) {
        setMissions(prevMissions => prevMissions.map(mission => mission.id === id ? { ...mission, status: newStatus } : mission));
    }

    const filteredMissions = missions.filter(mission => filter === "All" || mission.status === filter);

    return (
        <div>
            <h1>Space Mission Controls</h1>
            <div id={style.filterContainer}>
                <MissionFilter setFilter={setFilter} />
            </div>
            {filteredMissions.map(m => {
                const { id, name, status, crew } = m;

                return (
                    <div key={id} id={style.missionContainer}>
                        <div>
                            <MissionCard name={name} status={status} crew={crew} />
                        </div>
                        <div>
                            <MissionAction missionId={id} onUpdateMissionStatus={updateMissionStatus} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MissionControl;