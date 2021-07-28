import "../../pages/App";
import { Paragraph, Title } from "../../components";
import { Grid, Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide2";

function Slide2(props) {
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
              <Title color="purple">
                Lovely to have you with us! <br />
                Make yourself comfortable.
                <br />
                Put on some headphones and
                <br />
                Set them at a pleasant volume.
                <br />
                Sit back, relax, nand enjoy.
              </Title>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide2" })(Slide2);
