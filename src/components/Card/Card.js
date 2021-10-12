import Badge from "../Badge/Badge";
import imgPokemonDesconhecido from "../../assets/imgs/pokemon-desconhecido.png";
import "./Card.css";
function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="header">
        <img
          src={pokemon.imgSrc ? pokemon.imgSrc : imgPokemonDesconhecido}
          alt=""
        />
      </div>
      <div className="footer">
        <span className="title">{pokemon.nome}</span>
        <div className="badgesContainer">
          {pokemon.tiposPoderes.map((tipoPoder) => {
            return (
              <Badge
                key={tipoPoder.id}
                bgColor={tipoPoder.bgColor}
                tipoPoder={tipoPoder.nome}
              ></Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
