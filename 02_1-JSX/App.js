const Phenomena = (props) => {
	return (
		<div>
			<h1>Space Phenomena Tracker</h1>
			<ul>
				{props.list.map(p => {
					const randStatus = props.statuses[Math.floor(Math.random() * props.statuses.length)];
					return (
						<li key={p.id}>
							{p.emoji} {p.name} - {randStatus} {randStatus == "🚀 Prime for Study" ? "(You better get suited up!)" : ""}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function App() {
	const spacePhenomena = [
		{ id: 1, name: "Asteroid Belt", emoji: "☄️" },
		{ id: 2, name: "Galactic Nebula", emoji: "🌌" },
		{ id: 3, name: "Black Hole", emoji: "🕳️" },
		{ id: 4, name: "Supernova Explosion", emoji: "💥" },
		{ id: 5, name: "Pulsar", emoji: "⚡" },
		{ id: 6, name: "Quasar", emoji: "💫" },
		{ id: 7, name: "Exoplanet", emoji: "🪐" },
		{ id: 8, name: "Interstellar Cloud", emoji: "☁️" },
		{ id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
		{ id: 10, name: "Magnetic Field Reversal", emoji: "🧲" }
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

	return (
		<Phenomena list={spacePhenomena} statuses={observationStatuses} />
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
