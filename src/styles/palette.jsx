import { createTheme } from "@mui/material";

export const primaryColor = "#FF452B"
export const primaryColorLight = "#FEF1F0"
export const secondaryColor = "#263238"
export const titleColor = "#212121"
export const subtitleColor = "#6D6D6D"
export const shadowBoxColor = "rgba(0, 0, 0, 0.22)"
export const theme = createTheme({
    palette: {
        primary: {
            main:
                primaryColor,
        },
        secondary: { main: secondaryColor },
        title: {
            main: titleColor
        },
        subtitle: { main: subtitleColor },
        tagBackground: { main: "#ECEFF1" },
        tagTitle: { main: "#607D8" }
    }

})