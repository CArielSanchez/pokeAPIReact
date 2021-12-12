import { Button } from "@mui/material";
import { primaryColor } from "../../../../styles/palette";
import { Favorite } from "@mui/icons-material";
export const PokeCardButton = ({ onClick, title, style = {} }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "white",
        backgroundColor: primaryColor,
        width: style?.width,
        display: "flex",
        justifyContent: "space-around",
        "&:hover": {
          backgroundColor: "white",
          color: primaryColor,
          borderColor: primaryColor,
          borderWidth: 1,
          borderStyle: "solid",
        },
      }}
    >
      {" "}
      <Favorite sx={{ color: primaryColor }} /> <div>{title}</div>{" "}
      <Favorite sx={{ color: primaryColor }} />{" "}
    </Button>
  );
};
export const OrangeButton = ({ title, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "white",
        backgroundColor: primaryColor,
        display: "flex",
        justifyContent: "space-around",
        "&:hover": {
          backgroundColor: "white",
          color: primaryColor,
          borderColor: primaryColor,
          borderWidth: 1,
          borderStyle: "solid",
        },
      }}
    >
      {" "}
      <div>{title}</div>{" "}
    </Button>
  );
};
