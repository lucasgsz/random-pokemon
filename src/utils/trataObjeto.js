const trataObjeto = (objectResponse) => {
  let tiposPoderes = [];
  objectResponse.types.forEach((tipo) => {
    let idPoder = +tipo.type.url
      .split("https://pokeapi.co/api/v2/type/")[1]
      .replace("/", "");

    let color = "#" + Math.floor(("0." + idPoder) * 16777215).toString(16);

    tiposPoderes.push({
      id: idPoder,
      nome: tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1),
      bgColor: color,
    });
  });

  let pokemonAux = {
    nome:
      objectResponse.name.charAt(0).toUpperCase() +
      objectResponse.name.slice(1),
    imgSrc: objectResponse.sprites.other["official-artwork"].front_default,
    tiposPoderes,
  };

  return pokemonAux;
};

module.exports = trataObjeto;
