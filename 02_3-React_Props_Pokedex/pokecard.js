function Pokecard(props) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`;
    return (
        <div id="pokecard" key={props.pokemon.id}>
            <p>{props.pokemon.name}</p>
            <img src={imgSrc} />
            <div id="info">
                <p>Type: {props.pokemon.type}</p>
                <p>EXP: {props.pokemon.base_experience}</p>
            </div>
        </div>
    );
}