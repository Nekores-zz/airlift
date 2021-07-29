import { Title } from "../../components";
import { Grid, Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide3";

function Slide3(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className="overlay">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Title color="purple">This screen is under construction!</Title>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide3" })(Slide3);
