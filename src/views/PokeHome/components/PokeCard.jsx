import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { capitalizeFirstLetter } from "../../../utils";
import {
  shadowBoxColor,
  titleColor,
  subtitleColor,
  secondaryColor,
  primaryColor,
} from "../../../styles/palette";
import { Chip } from "@mui/material";
import { translateTypes, translateStats } from "../../../utils";
import AdoptionDialog from "./Dialog/AdoptionDialog";
import StatsDialog from "./Dialog/StatsDialog";
export const PokeCard = ({
  id,
  name,
  imagenes,
  height,
  weight,
  stats,
  types,
  allTypes,
  allStats,
}) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [modalCard, setModalCard] = useState(false);

  const shadow = `${shadowBoxColor} 0px 14px 28px, ${shadowBoxColor} 0px 10px 10px`;
  useEffect(() => {
    if (Object.keys(allTypes).length != 0) {
      setPokemonTypes(translateTypes(types, allTypes));
    }
  }, [allTypes]);
  useEffect(() => {
    if (Object.keys(allStats).length != 0) {
      setPokemonStats(translateStats(stats, allStats));
    }
  }, [allStats]);
  return (
    <>
      <StatsDialog
        name={capitalizeFirstLetter(name)}
        stats={pokemonStats}
        open={modalCard}
        setOpen={setModalCard}
      />
      <Card
        sx={{
          maxWidth: "250px",
          margin: "50px",
          borderRadius: 3,
          boxShadow: shadow,
        }}
      >
        <CardActionArea
          sx={{ borderRadius: 3 }}
          onClick={() => {
            setModalCard(true);
          }}
        >
          <CardContent>
            {" "}
            <img
              component="img"
              height="140"
              src={imagenes.front_default}
              alt="pokemon image"
            />
          </CardContent>

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  color: subtitleColor,
                  fontSize: "medium",
                  verticalAlign: "text-bottom",
                }}
              >
                #{id}
              </div>
              <div style={{ color: titleColor }}>
                {capitalizeFirstLetter(name)}
              </div>
              <div></div>
            </Typography>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              {pokemonTypes?.map((type) => (
                <Chip
                  key={type.name}
                  size="small"
                  sx={{ margin: 0.3, color: secondaryColor }}
                  label={type.name}
                />
              ))}
            </Grid>
            <Typography
              variant="body2"
              component="div"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid color={subtitleColor}>
                <div>Peso:</div>
                <div>Altura:</div>
              </Grid>
              <Grid color={secondaryColor}>
                <div>{weight / 10} kg</div>
                <div>{height / 10} m</div>
              </Grid>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <AdoptionDialog name={capitalizeFirstLetter(name)} />
        </CardActions>
      </Card>
    </>
  );
};
