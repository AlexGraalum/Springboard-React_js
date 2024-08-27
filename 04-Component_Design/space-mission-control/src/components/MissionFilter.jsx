import style from "./MissionFilter.module.css";

function MissionFilter({ setFilter }) {
    const statusFilters = ["All", "Planned", "Active", "Complete"];
    return (
        <>
            {
                statusFilters.map((status, index) => (
                    <button key={index} id={style.statusButton} onClick={() => setFilter(status)}>{status}</button>
                ))
            }
        </>
    );
}

export default MissionFilter;