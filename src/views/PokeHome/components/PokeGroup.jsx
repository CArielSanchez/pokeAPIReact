import { PokeCard } from "./PokeCard";
import { CircularProgress, Grid } from "@mui/material";
import { OrangeButton } from "./Buttons";
import { limit } from "../../../utils";
export const PokeGroup = ({
  id,
  counter,
  pokemons,
  offsetPokemon,
  setOffsetPokemon,
  loading,
  types,
  stats,
}) => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      {pokemons.map((p) => (
        <PokeCard
          key={id + p.id}
          id={p.id}
          name={p.name}
          imagenes={p.sprites}
          stats={p.stats}
          height={p.height}
          weight={p.weight}
          types={p.types}
          allTypes={types}
          allStats={stats}
        />
      ))}
      <Grid
        item
        xs={12}
        sx={{
          margin: "15px",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress variant="indeterminate" />
        ) : counter > pokemons.length ? (
          <OrangeButton
            onClick={() => {
              let toSave = limit + offsetPokemon;
              setOffsetPokemon(toSave);
            }}
            title="•••"
          />
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
