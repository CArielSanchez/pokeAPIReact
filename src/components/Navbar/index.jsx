import { AppBar, Grid, Typography, Chip } from "@mui/material";
import charmanderFamily from "../../assets/images/charmanderFamily.png";
import { primaryColor, subtitleColor } from "../../styles/palette";
const Navbar = () => {
  return (
    <AppBar
      sx={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        backgroundColor: "white",
        color: primaryColor,
        height: 50,
        maxHeight: 100,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 3,
          marginRight: 3,
        }}
      >
        <Typography variant="h5">
          <img src={charmanderFamily} width={40} /> PokeHome{" "}
          <Grid
            sx={{
              fontSize: 14,
              color: subtitleColor,
              display: { xs: "none", sm: "inline" },
            }}
          >
            {" "}
            ¡Adoptalos Ya!
          </Grid>
        </Typography>
        <div> </div>
      </Grid>
    </AppBar>
  );
};
export default Navbar;
