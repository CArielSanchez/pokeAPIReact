export const limit = 15;
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const translateTypes = (types, hash) => {
  types = types.map((type) => type.type.name);
  types = types.map((type) => hash[type]);
  return translateSpanish(types);
};
export const translateStats = (stats, hash) => {
  stats = stats.map((stat) => {
    let h = hash[stat.stat.name];
    h.stat = stat;
    return h;
  });
  return translateSpanish(stats);
};
export const translateSpanish = (types) => {
  let tsl = types.map((type) => {
    let ti = type.names.filter((t) => t.language.name == "es");
    if (ti.length == 0) {
      ti = type.names.filter((t) => t.language.name == "en");
    }
    type.name = ti[0].name;
    return type;
  });
  return tsl;
};
