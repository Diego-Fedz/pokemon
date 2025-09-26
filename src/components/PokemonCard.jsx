const PokemonCard = ({ name, url }) => {
    const pokemonId = url.split('/')[6].padStart(3, '0');
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`;
    return (
        <div className=" card bg-light">
            <a href="">
                <img src={imageUrl}  alt={name} class="card-img-top" />
            </a>
            <div className="card-body">
                <h2 class=" card-title text-center">{name}</h2>
            </div>
        </div>
    );
};
export default PokemonCard;