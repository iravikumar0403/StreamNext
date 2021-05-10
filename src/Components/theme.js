import { createMuiTheme } from "@material-ui/core";
import { grey, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: grey,
    secondary: teal,
    text: {
      primary: "#FFF",
    },
  },
});

export default theme;
