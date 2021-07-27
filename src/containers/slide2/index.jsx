import "../../pages/App";
import { Paragraph, Title } from "../../components";
import { Grid, Container } from "@material-ui/core";

function Slide2() {
  return (
    <div className="content-area">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Title color="purple">Get started</Title>
            <Paragraph>
              In order to reserve your username and collect coin you have to
              install AirLift plugin.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Slide2;
