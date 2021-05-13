import { createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#202124",
    },
    secondary: teal,
    text: {
      primary: "#FFF",
      secondary: "#FFF",
    },
  },
});

export default theme;
