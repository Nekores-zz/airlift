import { Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/containers/navbar";

function Navbar(props) {
  const { classes } = props;

  return (
    <Container>
      <div className={classes.root}>navbar</div>
    </Container>
  );
}

export default withStyles(styleSheet, { name: "Navbar" })(Navbar);
