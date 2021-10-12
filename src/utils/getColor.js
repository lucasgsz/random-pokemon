const getColor = (tiposPoderes) => {
  let bgColorString = "";

  tiposPoderes.forEach((tipoPoder) => {
    if (bgColorString) {
      bgColorString = bgColorString + "," + tipoPoder.bgColor;
    } else {
      bgColorString = tipoPoder.bgColor;
    }
  });

  if (tiposPoderes.length > 1) {
    return "linear-gradient(" + bgColorString + ")";
  } else {
    return bgColorString;
  }
};

export default getColor;
